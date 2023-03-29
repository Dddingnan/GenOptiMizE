// packages
import React from 'react';
import styled from 'styled-components';
import GoogleButton from 'react-google-button';

// components
import { useLocation } from 'react-router-dom';
import Footer from '../../LayoutWrapper/Footer';

// methods
import { signInWithGoogle } from '../../../api/firebase/init';
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

function Index(): JSX.Element {
  const location = useLocation();
  console.log('Index', location);

  return (
    <StyledWrap>
      <StyledContent>
        <div style={{ height: 500 }}>
          <GoogleButton onClick={() => signInWithGoogle()} />
        </div>
        <Footer />
      </StyledContent>
    </StyledWrap>
  );
}

export default Index;
