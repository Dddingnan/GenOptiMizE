// packages
import React from 'react';
import styled from 'styled-components';
import * as color from 'constants/colors';

const StyledWrapCopy = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${color.DARK_BLUE_COLOR};
  @media (max-width: 450px) {
    padding-bottom: 95px;
  }
`;

const StyledCopyRight = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const StyledFooter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 12px;
  color: ${color.FOOTER_FONT_COLOR};
  flex-direction: row;
  justify-content: center;
  @media (max-width: 1023px) {
    margin: 10px 10px;
  }
`;

const StyledFooterLeft = styled(StyledFooter)`
  @media (max-width: 1023px) {
    justify-content: center;
    text-align: center;
  }
`;

function Footer(): JSX.Element {
  return (
    <StyledWrapCopy id="copyright">
      <StyledCopyRight>
        <StyledFooterLeft>Copyright © 2023 GenOptiMizE</StyledFooterLeft>
      </StyledCopyRight>
    </StyledWrapCopy>
  );
}

export default Footer;
