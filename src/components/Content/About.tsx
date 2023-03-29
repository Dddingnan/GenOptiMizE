// packages
import React from 'react';
import styled from 'styled-components';
import { sanitizeHtml } from 'method';
import * as color from 'constants/colors';
import Construction from 'assets/construction.jpg';

const StyledUpper = styled.div`
  width: 100%;
  background-color: ${color.LIGHT_GREY_COLOR};
  display: flex;
  flex-direction: row;
  @media (max-width: 1023px) {
    align-items: center;
    justify-content: flex-end;
    flex-direction: column-reverse;
  }
`;

const StyledDownner = styled.div`
  width: 100%;
  background-color: ${color.DEFAULT_YELLOW};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.FONT_BLUE_COLOR};
`;

const StyledUpperLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media (max-width: 1023px) {
    flex: none;
  }
`;

const StyledUpperRight = styled.div`
  display: flex;
  flex: 1;
  // background-image: url(${Construction});
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  // height: 680px;
  // width: 680px;
  // @media (max-width: 1023px) {
  //   margin: 15px 0px;
  //   display: block;
  //   flex: none;
  // }
  // @media (max-width: 680px) {
  //   height: 500px;
  //   width: 400px;
  // }
  // @media (max-width: 400px) {
  //   height: 300px;
  //   width: 350px;
  // }
  // @media (max-width: 350px) {
  //   height: 200px;
  //   width: 300px;
  // }
`;

const StyledImg = styled.img`
  height: 680px;
  width: 680px;
  @media (max-width: 1023px) {
    margin: 15px 0px;
    display: block;
    flex: none;
  }
  @media (max-width: 680px) {
    height: 500px;
    width: 400px;
  }
  @media (max-width: 400px) {
    height: 300px;
    width: 350px;
  }
  @media (max-width: 350px) {
    height: 200px;
    width: 300px;
  }
`;

const StyledUpperLeftContent1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

const StyledUpperLeftContent = styled.div`
  display: flex;
  flex: 1.25;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
`;

const StyledTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 50px 0px 40px 0px;
  @media (max-width: 1023px) {
    justify-content: center;
    align-items: center;
  }
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
  margin: 10px;
`;

const StyledUpperLeftContentInner = styled.div`
  color: ${color.DARK_BLUE_COLOR};
  line-height: 1.7em;
  font-size: 17px;
  margin: 10px 40px 0px 10px;
  @media (max-width: 1023px) {
    margin: 0px 40px 40px 40px;
  }
`;

const StyledDownnerInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    width: 140px;
  }
`;

const StyledDownnerInnerWrap = styled.div`
  display: flex;
  flex: ${(props) => (props.noFlex ? '1' : 'none')};
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    flex: none;
    width: 150px;
    margin: 8px 0px;
  }
`;

const StyledDownnerNumber = styled.div`
  font-size: 60px;
  font-weight: 700;
  @media (max-width: 1023px) {
    font-size: 40px;
  }
`;

const StyledDownnerText = styled.div`
  font-size: 22px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5em;
  text-align: center;
}
`;

const StyledDownnerRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledDownnerRightInner = styled.div`
  width: 1px;
  height: 71px;
  color: ${color.WHITE_COLOR};
  background-color: ${color.WHITE_COLOR};
  border: 1px solid ${color.WHITE_COLOR};
  @media (max-width: 1023px) {
    margin: 5px;
  }
`;

const StyledDownnerOuter = styled.div`
  max-width: 1024px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  @media (max-width: 1023px) {
    width: 300px;
    flex-wrap: wrap;
  }
`;

const aa = `I'm a paragraph. Click here to add your own 
text and edit me. It’s easy. Just click “Edit Text” or 
double click me to add your own content and make changes 
to the font. Feel free to drag and drop me anywhere you 
like on your page. I’m a great place for you to tell a 
story and let your users know a little more about you.`;

const data = [
  {
    number: 2023,
    name: 'Year<br>Established',
  },
  {
    number: 206,
    name: 'Projects<br>Completed',
  },
  {
    number: 870,
    name: 'Contractors<br>Appointed',
  },
  {
    number: 26,
    name: 'Awards<br>Won',
  },
];
function About(props: { isMobile: boolean }): JSX.Element {
  const { isMobile } = props;
  return (
    <>
      <StyledUpper id="about">
        <StyledUpperLeft>
          {!isMobile && <StyledUpperLeftContent1 />}
          <StyledUpperLeftContent>
            <StyledTitleWrap>
              <StyledTitle>ABOUT</StyledTitle>
              <StyledHr />
            </StyledTitleWrap>

            <StyledUpperLeftContentInner>{aa}</StyledUpperLeftContentInner>
          </StyledUpperLeftContent>
        </StyledUpperLeft>

        <StyledUpperRight>
          <StyledImg src={Construction} alt="about" />
        </StyledUpperRight>
      </StyledUpper>

      <StyledDownner>
        <StyledDownnerOuter>
          {data.map((val, key) => (
            <StyledDownnerInnerWrap noFlex={key !== 3}>
              <StyledDownnerInner>
                <StyledDownnerNumber>{val.number}</StyledDownnerNumber>
                <StyledDownnerText dangerouslySetInnerHTML={{ __html: sanitizeHtml(val.name) }} />
              </StyledDownnerInner>
              {(!isMobile || key !== 1) && key !== 3 && (
                <StyledDownnerRight>
                  <StyledDownnerRightInner />
                </StyledDownnerRight>
              )}
            </StyledDownnerInnerWrap>
          ))}
        </StyledDownnerOuter>
      </StyledDownner>
    </>
  );
}

export default About;
