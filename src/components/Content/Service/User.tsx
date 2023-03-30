// packages
import React from 'react';
import styled from 'styled-components';
import * as color from 'constants/colors';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const StyledWrap = styled.div`
  width: 50%;
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
  margin: 20px 10px 0px 0px !important;
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
  margin: 10px !important;
`;

function User(props): JSX.Element {
  const { user } = props;
  const { userName, photoUrl } = user;
  return (
    <StyledWrap>
      <StyledIconWrap>
        <Avatar
          alt={userName}
          src={photoUrl}
          sx={{ width: 56, height: 56, margin: '20px 10px 0px 0px' }}
        />
        <StyledName variant="h4">{userName}</StyledName>
      </StyledIconWrap>
      <StyledBorder />

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
