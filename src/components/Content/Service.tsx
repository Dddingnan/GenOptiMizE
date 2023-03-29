// packages
import React from 'react';
import styled from 'styled-components';
import { sanitizeHtml } from 'method';
import * as color from 'constants/colors';

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
  color: ${color.FONT_BLUE_COLOR};
  font-weight: bold;
`;

const StyledInnerContent = styled.div`
  margin: 10px;
  line-height: 1.6em;
  font-size: 15px;
  color: ${color.FONT_GREY_COLOR};
  font-weight: 300;
`;

const data = [
  {
    title: 'Preconstruction<br>Planning',
    content: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`,
    url: 'https://static.wixstatic.com/media/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg/v1/fill/w_600,h_454,al_c,q_80,usm_0.66_1.00_0.01/c19c76_22d8ec47d1484b09a9c333e4141a12a0.webp',
  },
  {
    title: 'Architectural<br>Modelling',
    content: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`,
    url: 'https://static.wixstatic.com/media/b31d0e84cb714761b2b1f06c305023c7.jpg/v1/fill/w_600,h_454,al_c,q_80,usm_0.66_1.00_0.01/b31d0e84cb714761b2b1f06c305023c7.webp',
  },
  {
    title: 'Construction<br>Management',
    content: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`,
    url: 'https://static.wixstatic.com/media/9e456adff0ee4a2c847cfd67a62454a3.jpg/v1/fill/w_600,h_454,al_c,q_80,usm_0.66_1.00_0.01/9e456adff0ee4a2c847cfd67a62454a3.webp',
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
              <StyledInnerContent>{val.content}</StyledInnerContent>
            </StyledDowner>
          </StyledContent>
        ))}
      </StyledContentWrap>
    </StyledWrap>
  );
}

export default Service;
