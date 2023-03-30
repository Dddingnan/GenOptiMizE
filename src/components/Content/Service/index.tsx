// packages
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoogleButton from 'react-google-button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// components
import { useLocation } from 'react-router-dom';
import Footer from '../../LayoutWrapper/Footer';
import User from './User';

// methods
import { auth, signInWithGoogle } from '../../../api/firebase/init';
import * as color from '../../../constants/colors';

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

function onAuthStateChange(callback) {
  return auth.onAuthStateChanged(async (user) => {
    if (user) {
      const { uid, displayName, email, photoURL } = user;
      try {
        callback({ uid, userName: displayName, photoUrl: photoURL, email, loggedIn: true });
      } catch (error) {
        callback({ uid: '', userName: '', loggedIn: false });
      }
    } else {
      callback({ uid: '', userName: '', loggedIn: false });
    }
  });
}

function Index(): JSX.Element {
  const location = useLocation();
  const [user, setUser] = useState({ uid: '', userName: '', photoUrl: '', loggedIn: false });
  const { loggedIn } = user;
  console.log('Index', user, location);
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <StyledWrap>
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
