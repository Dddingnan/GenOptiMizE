// packages
import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import * as color from 'constants/colors';
import { GOOGLA_API_KEY, Location } from 'constants/index';

import SharedForm from './Form';

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
`;

const StyledInfoWrap = styled.div`
  width: 100%;
  margin: 50px 0px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1023px) {
    flex-direction: column-reverse;
  }
`;

const StyledInfoSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StyledInfoInner = styled.div`
  margin: 20px 0px;
`;

const StyledInfoTitle = styled.div`
  font-size: 25px;
  color: ${color.DEFAULT_BACKGROUND};
  font-weight: 600;
  letter-spacing: 1px;
`;

const StyledInfoTitleMg = styled(StyledInfoTitle)`
  margin: 30px 0px;
`;

const StyledInfoContent = styled.div`
  font-size: 17px;
  color: ${color.FONT_DESCRIPTION_COLOR};
  letter-spacing: 1px;
  margin: 30px 10px 30px 0px;
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

      <StyledInfoWrap>
        <StyledInfoSide>
          <StyledInfoInner>
            <StyledInfoTitle>Inquiries</StyledInfoTitle>

            <StyledInfoContent>
              For any inquiries, questions or commendations, please call: 123-456-7890 or fill out
              the following form
            </StyledInfoContent>
          </StyledInfoInner>

          <StyledInfoInner>
            <StyledInfoTitle>Contact Us</StyledInfoTitle>
            <SharedForm />
          </StyledInfoInner>
        </StyledInfoSide>

        <StyledInfoSide>
          <StyledInfoInner>
            <StyledInfoTitle>Head Office</StyledInfoTitle>

            <StyledInfoContent>
              500 Terry Francois Street San Francisco, CA 94158
              <StyledInfoContent>
                <br />
                info@mysite.com
                <br />
                Tel: 123-456-7890
                <br />
                Fax: 123-456-7890
              </StyledInfoContent>
            </StyledInfoContent>
          </StyledInfoInner>

          <StyledInfoInner>
            <StyledInfoTitle>Employment</StyledInfoTitle>

            <StyledInfoContent>
              To apply for a job with Sphere Constuctions, please send a cover letter together with
              your C.V. to: info@mysite.com
            </StyledInfoContent>
          </StyledInfoInner>

          <StyledInfoInner>
            <StyledHr />
            <StyledInfoTitleMg>Get a quote: 123-456-7890</StyledInfoTitleMg>
          </StyledInfoInner>
        </StyledInfoSide>
      </StyledInfoWrap>
    </StyledWrap>
  );
}

export default Contact;
