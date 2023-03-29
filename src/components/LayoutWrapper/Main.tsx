// packages
import React from 'react';
import styled from 'styled-components';

// components
import Footer from './Footer';
import Home from '../Content/Home';
import Service from '../Content/Service';
import About from '../Content/About';
import Projects from '../Content/Projects';
import Contact from '../Content/Contact';

import * as color from '../../constants/colors';

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

function Main(props: { isMobile: boolean }): JSX.Element {
  const { isMobile } = props;
  return (
    <StyledWrap>
      <Home isMobile={isMobile} />
      <StyledContent>
        <Service />
        <About isMobile={isMobile} />
        <Projects />
        <Contact />
        <Footer />
      </StyledContent>
    </StyledWrap>
  );
}

export default Main;
