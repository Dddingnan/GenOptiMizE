import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { goSmothTag } from 'method';
// import Drawer from 'react-motion-drawer';
import LunaLeca from '../../assets/lunaleca.png';
import * as color from '../../constants/colors';
import { distinguishLan } from '../../constants/navebar';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${color.DEFAULT_BACKGROUND};
  width: 100vw;
  height: 80px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledLeft = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
`;

const StyledRight = styled.div`
  display: flex;
  flex: 1.5;
  height: 100%;
  align-items: flex-end;
  @media (max-width: 1023px) {
    align-items: center;
    justify-content: flex-end;
  }
`;

const StyledIconWrap = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  background-color: ${color.DEFAULT_YELLOW};
  cursor: pointer;
  @media (max-width: 1023px) {
    width: 165px;
  }
`;

const StyledIcon = styled.img`
  width: 60px;
  height: 60px;
  padding: 8px;
`;

const StyledIconName = styled.div`
  line-height: 1em;
  font-size: 23px;
  color: ${color.DEFAULT_BACKGROUND};
  font-weight: bold;
  font-family: DFKai-sb;
`;

const StyledIconSubName = styled.div`
  margin-top: 10px;
  line-height: 1em;
  font-size: 20px;
  color: ${color.DEFAULT_BACKGROUND};
  font-weight: 350;
  font-family: avenir-lt-w01_35-light1475496, sans-serif;
`;

const StyledRightContent = styled.div`
  display: flex;
  width: 100%;
`;

const StyledNav = styled.a`
  display: flex;
  flex: 1;
  margin: 20px 0px;
  color: ${color.WHITE_COLOR};
  cursor: pointer;
  font-size: 15px;
  &:hover {
    color: ${color.DEFAULT_YELLOW};
  }
`;

const StyledMenuButton = styled.button`
  color: ${color.WHITE_COLOR};
  padding: 15px;
  font-size: 25px;
  cursor: pointer;
`;

// const StyledMenu = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-direction: column;
//   padding: 20px;
//   width: 100%;
//   height: 100%;
// `;

// const StyledSubMenu = styled.div`
//   margin: 10px;
//   color: ${color.FONT_BLUE_COLOR};
//   cursor: pointer;
//   font-size: 20px;
//   font-weight: 600;
//   font-family: avenir-lt-w01_35-light1475496, sans-serif;
// `;

// const StyledHr = styled.div`
//   width: 36px;
//   height: 3px;
//   color: ${color.DEFAULT_YELLOW};
//   background-color: ${color.DEFAULT_YELLOW};
//   border: 1px solid ${color.DEFAULT_YELLOW};
//   margin: 0px 10px;
// `;

// const StyledWrapMenu = styled.div`
//   margin: 10px 0px;
// `;

// const StyledWrapOuter = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   width: 100%;
//   height: 100%;
// `;

// const StyledWrapOuter2 = styled.div`
//   display: flex;
//   flex: 1;
//   justify-content: flex-start;
//   align-items: flex-end;
//   width: 100%;
//   height: 100%;
// `;

// const StyledIconButton = styled.button`
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
//   margin: 40px 10px 10px 10px;
// `;

// const StyledI = styled.i`
//   color: ${color.FONT_BLUE_COLOR};
//   font-size: 25px;
//   transition: all 0.3s;
//   &:hover {
//     transform: rotate(0.5turn);
//   }
// `;

function Header(props: { isMobile: boolean }): JSX.Element {
  const { isMobile } = props;
  const location = useLocation();
  const [isShow, setShow] = useState(false);
  const goHome = (): void => {
    goSmothTag('home');
  };

  const go = (name): void => {
    goSmothTag(name.toLowerCase());
    if (isMobile) setShow(false);
  };

  const navbar = useMemo(
    () => [
      {
        id: 0,
        title: distinguishLan(['首頁', '首页', 'HOME'], location),
        name: 'HOME',
      },
      {
        id: 1,
        title: distinguishLan(['服務', '服务', 'SERVICES'], location),
        name: 'SERVICES',
      },
      {
        id: 2,
        title: distinguishLan(['關於我們', '关于我们', 'ABOUT'], location),
        name: 'ABOUT',
      },
      {
        id: 3,
        title: distinguishLan(['合作案例', '合作案例', 'PROJECTS'], location),
        name: 'PROJECTS',
      },
      {
        id: 4,
        title: distinguishLan(['聯絡我們', '联络我们', 'CONTACT'], location),
        name: 'CONTACT',
      },
    ],
    [location],
  );

  const handle = () => {
    setShow(!isShow);
  };

  return (
    <StyledHeader>
      <StyledLeft>
        <StyledIconWrap onClick={goHome}>
          <StyledIcon src={LunaLeca} alt="icon" />
          <div>
            <StyledIconName>
              大月岩
              {!isMobile && '國際有限公司'}
            </StyledIconName>
            <StyledIconSubName>
              LunaLeca
              {!isMobile && 'International Ltd.'}
            </StyledIconSubName>
          </div>
        </StyledIconWrap>
      </StyledLeft>
      <StyledRight>
        {isMobile ? (
          <>
            <StyledMenuButton type="button" onClick={handle}>
              <i className="fa fa-bars" />
            </StyledMenuButton>
            {/* <Drawer
              fadeOut
              right
              open={isShow}
              onChange={handle}
              width={165}
              overlayColor="#000000b5"
              drawerStyle={{
                background: 'rgb(236 236 236 / 98%)',
              }}
            >
              <StyledMenu>
                <StyledWrapOuter>
                  {navbar.map((val) => (
                    <StyledWrapMenu>
                      <StyledSubMenu key={val.id} onClick={() => go(val.name)}>
                        {val.title}
                      </StyledSubMenu>
                      <StyledHr />
                    </StyledWrapMenu>
                  ))}
                </StyledWrapOuter>
                <StyledWrapOuter2>
                  <StyledIconButton onClick={handle}>
                    <StyledI className="fa fa-chevron-left" />
                    <StyledHr />
                  </StyledIconButton>
                </StyledWrapOuter2>
              </StyledMenu>
            </Drawer> */}
          </>
        ) : (
          <StyledRightContent>
            {navbar.map((val) => (
              <StyledNav key={val.id} onClick={() => go(val.name)}>
                {val.title}
              </StyledNav>
            ))}
          </StyledRightContent>
        )}
      </StyledRight>
    </StyledHeader>
  );
}

export default Header;
