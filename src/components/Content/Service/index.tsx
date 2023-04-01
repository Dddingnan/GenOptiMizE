// packages
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import GoogleButton from 'react-google-button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { filterItems } from 'method/index';
import { useLocation } from 'react-router-dom';

// components
import Footer from '../../LayoutWrapper/Footer';
import User from './User';
// import data from 'data/index';

// methods
import { auth, signInWithGoogle, logout } from '../../../api/firebase/init';
import * as color from '../../../constants/colors';
import { UserType } from '../../../constants/index';

const StyledWrap = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: ${color.WHITE_COLOR};
  overflow: hidden scroll;
  position: fixed;
  left: 0;
  margin-top: 80px;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContentWrap = styled.div`
  min-height: 500px;
  width: 50%;
  @media (max-width: 1023px) {
    width: 80%;
  }
`;

const StyledGoogleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 140px);
`;

const StyledName = styled(Typography)`
  font-size: 25px !important;
  color: ${color.DEFAULT_BACKGROUND};
`;

const StyledBorder = styled(Divider)`
  margin: 8px 0px 50px 0px !important;
  width: 100px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #27ffee, #1da69c) border-box;
  border-radius: 50em;
  border: 1px solid transparent !important;
`;

type Modal = { status: 'success' | 'info' | 'warning' | 'error'; open: boolean; message: string };

function Index(): JSX.Element {
  const [modal, setModal] = useState<Modal>({ status: 'info', open: false, message: '' });
  const [user, setUser] = useState<UserType>({
    uid: '',
    userName: '',
    photoUrl: '',
    loggedIn: false,
  });
  const { loggedIn } = user;
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const type = query.get('type');
  const isProvider = type === 'provider';

  const errorHandle = (callback) => {
    callback({ uid: '', userName: '', loggedIn: false });
    setModal({
      status: 'error',
      message: "Sorry! You don't have permission to access!",
      open: true,
    });
    logout();
  };

  const onAuthStateChange = useCallback(
    (callback) => {
      return auth.onAuthStateChanged(async (firebaseUser) => {
        if (firebaseUser) {
          const { uid, displayName, email, photoURL } = firebaseUser;
          try {
            const record = filterItems(displayName as string);
            if (Object.keys(record).length) {
              if (isProvider && record.isAdmin) {
                callback({ uid, userName: displayName, photoUrl: photoURL, email, loggedIn: true });
                return;
              }
              if (!isProvider) {
                callback({ uid, userName: displayName, photoUrl: photoURL, email, loggedIn: true });
                return;
              }
              if (!record.isAdmin) {
                errorHandle(callback);
                return;
              }
            } else {
              errorHandle(callback);
              return;
            }
          } catch (error) {
            errorHandle(callback);
          }
        } else {
          callback({ uid: '', userName: '', loggedIn: false });
        }
      });
    },
    [isProvider],
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, [onAuthStateChange]);

  const handleClose = () => {
    setModal({
      status: 'info',
      open: false,
      message: '',
    });
  };

  return (
    <StyledWrap>
      <Dialog onClose={handleClose} open={modal.open}>
        <Alert severity={modal.status}>
          <AlertTitle>{modal.status}</AlertTitle>
          {modal.status === 'success' ? <>{modal.status}</> : <>{modal.message}</>}
        </Alert>
      </Dialog>
      <StyledContent>
        <StyledContentWrap>
          {loggedIn ? (
            <User user={user} />
          ) : (
            <StyledGoogleWrap>
              <StyledName variant="h4">Log in</StyledName>
              <StyledBorder />
              <GoogleButton onClick={() => signInWithGoogle()} />
            </StyledGoogleWrap>
          )}
        </StyledContentWrap>
        <Footer />
      </StyledContent>
    </StyledWrap>
  );
}

export default Index;
