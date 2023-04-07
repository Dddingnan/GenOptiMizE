// packages
import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import * as color from 'constants/colors';
import { GOOGLA_API_KEY, Location } from 'constants/index';

const StyledWrap = styled.div`
  max-width: 1024px;
  width: 80%;
  background-color: ${color.WHITE_COLOR};
`;

const StyledTitleWrap = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  color: ${color.DEFAULT_BACKGROUND};
  margin: 10px;
  font-weight: 600;
  letter-spacing: 0.05em;
  @media (max-width: 768px) {
    font-size: 45px;
  }
  @media (max-width: 400px) {
    font-size: 35px;
  }
`;

const StyledHr = styled.div`
  width: 116px;
  height: 10px;
  color: ${color.DEFAULT_YELLOW};
  background-color: ${color.DEFAULT_YELLOW};
  border: 1px solid ${color.DEFAULT_YELLOW};
`;

const StyledGMWrap = styled.div`
  width: 100%;
  height: 365px;
  margin-bottom: 70px;
`;

const Marker = (props) => {
  return (
    <>
      <div className="pin" {...props} />
      <div className="pulse" />
    </>
  );
};

function Contact(): JSX.Element {
  return (
    <StyledWrap id="contact">
      <StyledTitleWrap>
        <StyledTitle>CONTACT</StyledTitle>
        <StyledHr />
      </StyledTitleWrap>

      <StyledGMWrap>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: GOOGLA_API_KEY,
          }}
          defaultCenter={Location}
          defaultZoom={11}
        >
          <Marker {...Location} />
        </GoogleMapReact>
      </StyledGMWrap>
    </StyledWrap>
  );
}

export default Contact;
