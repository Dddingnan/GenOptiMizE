// packages
import React from 'react';
import styled from 'styled-components';
import { sanitizeHtml } from 'method';
import * as color from 'constants/colors';

import image1 from 'assets/gene.jpeg';
import image2 from 'assets/medicine.jpeg';

const StyledWrap = styled.div`
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

const StyledContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const StyledContent = styled.div`
  width: 300px;
  margin: 15px;
  transition: width 1.5s;
  &:hover {
    width: 350px;
  }
`;

const StyledUpper = styled.img`
  height: 227px;
  width: 100%;
`;

const StyledDowner = styled.div`
  height: 253px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${color.LIGHT_GREY_COLOR};
  padding: 5px;
`;

const StyledInnerTitle = styled.div`
  margin: 10px;
  line-height: 1.1em;
  font-size: 22px;
  color: ${color.DEFAULT_BACKGROUND};
  font-weight: bold;
`;

const StyledInnerContent = styled.div`
  margin: 10px;
  line-height: 1.6em;
  font-size: 15px;
  color: ${color.FOOTER_FONT_COLOR};
  font-weight: 300;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  width: 100px;
  height: 45px;
  background-color: ${color.DEFAULT_BACKGROUND};
  color: ${color.DEFAULT_YELLOW};
  margin: 15px 0px 0px 10px;
  font-size: 15px;
  cursor: pointer;
`;

const data = [
  {
    title: 'Provider',
    content: `Explore our genetic test catalog. <br> Genetic tests can inform personalized medication plans and detect drug interactions for safer use.`,
    url: image1,
  },
  {
    title: 'Patient',
    content: `Start your journey to better health. <br> Consult with a licensed pharmacist to ensure that you are taking medications safely and effectively.`,
    url: image2,
  },
];

function Service(): JSX.Element {
  return (
    <StyledWrap id="services">
      <StyledTitleWrap>
        <StyledTitle>SERVICES</StyledTitle>
        <StyledHr />
      </StyledTitleWrap>
      <StyledContentWrap>
        {data.map((val) => (
          <StyledContent>
            <StyledUpper src={val.url} />
            <StyledDowner>
              <StyledInnerTitle dangerouslySetInnerHTML={{ __html: sanitizeHtml(val.title) }} />
              <StyledInnerContent dangerouslySetInnerHTML={{ __html: sanitizeHtml(val.content) }} />
              <StyledButton>Get Started</StyledButton>
            </StyledDowner>
          </StyledContent>
        ))}
      </StyledContentWrap>
    </StyledWrap>
  );
}

export default Service;
