// packages
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// components
import { goSmothTag } from 'method';
import useCheckMobileScreen from 'method/checkDevice';
import { ResetStyle, GlobalStyle } from 'method/globalStyle';
import Header from './components/LayoutWrapper/Header';
import Main from './components/LayoutWrapper/Main';
import Service from './components/Content/Service/index';
import 'react-toastify/dist/ReactToastify.css';

const StyledWrap = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

// FIXEDME
// else if (parsedCompilerOptions[option] !== valueToCheck && option !== "jsx")

function Content(): JSX.Element {
  const location = useLocation();
  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    const { hash } = location;
    const place = document.getElementById(hash.substr(1));
    if (hash && place) {
      goSmothTag(hash.substr(1));
    }
  }, [location]);

  return (
    <StyledWrap>
      <Header isMobile={isMobile} />
      <Switch>
        <Route path="/service" component={() => <Service />} />
        <Route path="/" component={() => <Main isMobile={isMobile} />} />
      </Switch>
    </StyledWrap>
  );
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Content} />
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: '15px' }}
      />
    </BrowserRouter>
  );
}

export default App;
