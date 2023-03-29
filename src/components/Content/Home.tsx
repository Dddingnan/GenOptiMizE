// packages
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { goSmothTag, getLanguage, sanitizeHtml } from 'method';
import Video from '../../assets/video.mp4';
import VideoMobile from '../../assets/mobile.mp4';

const StyledWrap = styled.div`
  width: 100%;
  position: relative;
`;

const StyledVideo = styled.video`
  width: 100%;
`;

const StyledWrapTitle = styled.div`
  line-height: 1.1em;
  font-size: 60px;
  font-family: Gill Sans, sans-serif;
  color: white;
  position: absolute;
  top: 12%;
  left: 8%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1023px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

const StyledIcon = styled.div`
  color: white;
  cursor: pointer;
`;

/* eslint react/no-danger: 0 */
function Home(props: { isMobile: boolean }): JSX.Element {
  const { isMobile } = props;
  const location = useLocation();

  const go = (): void => {
    goSmothTag('services');
  };

  const hadleLanguage = () => {
    const value = getLanguage(location);
    switch (value) {
      case 2:
        return `EXPAND<br>PHARMACOGENOMIC<br>TESTING<br>ACCESSIBILITY`;
      default:
        return `EXPAND<br>PHARMACOGENOMIC<br>TESTING<br>ACCESSIBILITY`;
    }
  };

  return (
    <StyledWrap id="home">
      <StyledVideo autoPlay loop muted type="video/mp4" playsInline>
        <source type="video/mp4" src={isMobile ? VideoMobile : Video} />
        <source type="video/ogg" src={isMobile ? VideoMobile : Video} />
      </StyledVideo>
      <StyledWrapTitle>
        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(hadleLanguage()) }} />
        <StyledIcon onClick={go}>
          <i className="fa fa-chevron-down" />
        </StyledIcon>
      </StyledWrapTitle>
    </StyledWrap>
  );
}

export default Home;
