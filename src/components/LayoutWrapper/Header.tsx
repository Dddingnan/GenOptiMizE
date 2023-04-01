import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MedicationIcon from '@mui/icons-material/Medication';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useHistory, useLocation } from 'react-router-dom';
import { goSmothTag } from 'method';
import icon from '../../assets/icon.png';
import * as color from '../../constants/colors';

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
  border-bottom: 1px solid ${color.FONT_GREY_COLOR};
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
    width: 175px;
  }
`;

const StyledIcon = styled.img`
  width: 80px;
  height: 80px;
  padding-left: 5px;
`;

const StyledIconName = styled.div`
  line-height: 1em;
  font-size: 23px;
  color: ${color.DEFAULT_BACKGROUND};
  font-weight: 200;
`;

const StyledIconSubName = styled.div`
  margin-top: 10px;
  line-height: 1em;
  font-size: 14px;
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

function Header(props: { isMobile: boolean }): JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const { isMobile } = props;
  const [isShow, setShow] = useState(false);
  const goHome = (): void => {
    if (location.pathname !== '/') {
      history.push('/');
      setTimeout(() => goSmothTag('home'), 200);
    } else {
      goSmothTag('home');
    }
  };

  const go = (name): void => {
    if (location.pathname !== '/') {
      history.push('/');
      setTimeout(() => goSmothTag(name.toLowerCase()), 200);
    } else {
      goSmothTag(name.toLowerCase());
    }
    if (isMobile) {
      setShow(false);
      goSmothTag(name.toLowerCase());
      setTimeout(() => goSmothTag(name.toLowerCase()), 200);
    }
  };

  const navbar = useMemo(
    () => [
      {
        id: 0,
        title: 'HOME',
        name: 'HOME',
        icon: <HomeIcon />,
      },
      {
        id: 1,
        title: 'SERVICES',
        name: 'SERVICES',
        icon: <MedicationIcon />,
      },
      {
        id: 2,
        title: 'ABOUT',
        name: 'ABOUT',
        icon: <ApartmentIcon />,
      },
    ],
    [],
  );

  const handle = () => {
    setShow(!isShow);
  };

  const list = () => (
    <Box sx={{ width: 220 }} role="presentation">
      <List>
        {navbar.map((val) => (
          <ListItem key={val.title} disablePadding onClick={() => go(val.name)}>
            <ListItemButton>
              <ListItemIcon>{val.icon}</ListItemIcon>
              <ListItemText primary={val.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <StyledHeader>
      <StyledLeft>
        <StyledIconWrap onClick={goHome}>
          <StyledIcon src={icon} alt="icon" />
          <div>
            <StyledIconName>
              GenOpti
              {!isMobile && 'MizE'}
            </StyledIconName>
            <StyledIconSubName>
              Your Genes
              {!isMobile && ', Your Perfect Fit'}
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
            <Drawer anchor="right" open={isShow} onClose={handle}>
              {list()}
            </Drawer>
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
