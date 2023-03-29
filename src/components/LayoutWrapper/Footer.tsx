// packages
import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { goSmothTag } from 'method';
import * as color from 'constants/colors';

const StyledWrapCopy = styled.div`
  width: 100%;
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

const StyledFooterRight = styled(StyledFooter)`
  cursor: pointer;
  color: ${color.FOOTER_FONT_COLOR};
  font-size: 13px;
  @media (max-width: 1023px) {
    justify-content: center;
    text-align: center;
  }
`;

const StyledIon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${color.WHITE_COLOR};
  color: ${color.WHITE_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0px 7px;
`;

const StyledIonLine = styled(StyledIon)`
  color: #00b202;
  font-size: 33px;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  margin: 0px 15px;
`;

const StyledIonWechat = styled(StyledIon)`
  background-color: #00b202;
`;

const StyledIonFB = styled(StyledIon)`
  background-color: #1873ec;
`;

const StyledTransLanguage = styled.div`
  margin: 0px 10px;
`;

const StyledSelect = styled.select`
  width: 100px;
  background-color: ${color.DARK_BLUE_COLOR};
  color: ${color.FOOTER_FONT_COLOR};
  padding-left: 5px;
  border: none;
  appearance: none;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDQ0NC44MTkgNDQ0LjgxOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ0LjgxOSA0NDQuODE5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQzNC4yNTIsMTE0LjIwM2wtMjEuNDA5LTIxLjQxNmMtNy40MTktNy4wNC0xNi4wODQtMTAuNTYxLTI1Ljk3NS0xMC41NjFjLTEwLjA5NSwwLTE4LjY1NywzLjUyMS0yNS43LDEwLjU2MSAgIEwyMjIuNDEsMjMxLjU0OUw4My42NTMsOTIuNzkxYy03LjA0Mi03LjA0LTE1LjYwNi0xMC41NjEtMjUuNjk3LTEwLjU2MWMtOS44OTYsMC0xOC41NTksMy41MjEtMjUuOTc5LDEwLjU2MWwtMjEuMTI4LDIxLjQxNiAgIEMzLjYxNSwxMjEuNDM2LDAsMTMwLjA5OSwwLDE0MC4xODhjMCwxMC4yNzcsMy42MTksMTguODQyLDEwLjg0OCwyNS42OTNsMTg1Ljg2NCwxODUuODY1YzYuODU1LDcuMjMsMTUuNDE2LDEwLjg0OCwyNS42OTcsMTAuODQ4ICAgYzEwLjA4OCwwLDE4Ljc1LTMuNjE3LDI1Ljk3Ny0xMC44NDhsMTg1Ljg2NS0xODUuODY1YzcuMDQzLTcuMDQ0LDEwLjU2Ny0xNS42MDgsMTAuNTY3LTI1LjY5MyAgIEM0NDQuODE5LDEzMC4yODcsNDQxLjI5NSwxMjEuNjI5LDQzNC4yNTIsMTE0LjIwM3oiIGZpbGw9IiM3MzdkODIiLz4KPC9nPgo8L3N2Zz4K)
    100%/10px no-repeat;
`;

const options = [
  { value: 'tw', label: '繁體中文' },
  { value: 'cn', label: '簡體中文' },
  { value: 'en', label: 'English' },
];

function Footer(): JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelectedOption(e.target.value);
    history.push({
      ...location,
      pathname: `/${value}`,
    });
    goSmothTag('home');
  };

  return (
    <StyledWrapCopy id="copyright">
      <StyledCopyRight>
        <StyledFooterLeft>
          Copyright © 2014-2020 Gogoro Inc. 著作權所有，並保留一切權利。
        </StyledFooterLeft>
        <StyledFooterRight>
          <StyledIonLine>
            <i className="fab fa-line" />
          </StyledIonLine>
          <StyledIonFB>
            <i className="fa fa-facebook" />
          </StyledIonFB>
          <StyledIonWechat>
            <i className="fa fa-wechat" />
          </StyledIonWechat>

          <StyledTransLanguage>
            <StyledSelect onChange={handleSelect} value={selectedOption}>
              <option value="">--語言--</option>
              {options.map((val) => (
                <option value={val.value}>{val.label}</option>
              ))}
            </StyledSelect>
          </StyledTransLanguage>
        </StyledFooterRight>
      </StyledCopyRight>
    </StyledWrapCopy>
  );
}

export default Footer;
