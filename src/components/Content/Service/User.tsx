// packages
import React from 'react';
import styled from 'styled-components';
import * as color from 'constants/colors';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

import Record from './Record';

import { logout } from '../../../api/firebase/init';

const StyledWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledOutter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIconWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledName = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 0px 0px !important;
`;

const StyledWrapNameLeft = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

const StyledWrapNameRight = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
`;

const StyledRecordName = styled(Typography)`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0px 10px 0px 0px !important;
`;

const StyledSearchWrap = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  border: none;
  width: 250px;
  height: 45px;
  border-top: 1px solid ${color.DEFAULT_BACKGROUND};
  border-left: 1px solid ${color.DEFAULT_BACKGROUND};
  border-bottom: 1px solid ${color.DEFAULT_BACKGROUND};
  border-right: 1px solid ${color.DEFAULT_BACKGROUND};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  font-size: 18px;
  padding-left: 10px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 45px;
  background-color: ${color.DEFAULT_BACKGROUND};
  color: ${color.DEFAULT_YELLOW};
  font-size: 15px;
  cursor: pointer;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const StyledBorder = styled(Divider)`
  margin: 20px !important;
`;

function User(props): JSX.Element {
  const { user } = props;
  const { userName, photoUrl } = user;
  return (
    <StyledWrap>
      <StyledIconWrap>
        <StyledWrapNameLeft>
          <Avatar
            alt={userName}
            src={photoUrl}
            sx={{ width: 56, height: 56, margin: '0px 20px 0px 0px' }}
          />
          <StyledName variant="h4">{userName}</StyledName>
        </StyledWrapNameLeft>

        <StyledWrapNameRight>
          <Button
            variant="contained"
            endIcon={<LogoutIcon />}
            style={{ backgroundColor: '#E14949' }}
            onClick={() => logout()}
          >
            Log Out
          </Button>
        </StyledWrapNameRight>
      </StyledIconWrap>
      <StyledBorder />

      <StyledRecordName variant="h4">Enzyme Record</StyledRecordName>
      <Record user={user} />

      <StyledBorder />

      <StyledRecordName variant="h4">Medicine Record</StyledRecordName>
      <Record user={user} />

      <StyledOutter>
        <StyledSearchWrap>
          <StyledInput
            placeholder="Name..."
            type="text"
            // value={this.state.value} onChange={this.handleChange}
          />
          <StyledButton>Search</StyledButton>
        </StyledSearchWrap>
      </StyledOutter>
    </StyledWrap>
  );
}

export default User;
