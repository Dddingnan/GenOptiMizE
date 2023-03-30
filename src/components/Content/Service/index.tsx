// packages
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoogleButton from 'react-google-button';

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
        {loggedIn ? <User user={user} /> : <GoogleButton onClick={() => signInWithGoogle()} />}
        <Footer />
      </StyledContent>
    </StyledWrap>
  );
}

export default Index;
