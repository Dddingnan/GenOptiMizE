// packages
import React, { useState } from 'react';
import styled from 'styled-components';
import * as color from 'constants/colors';
import { useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

// Data
import data from 'data/index';
import { filterItems } from 'method/index';
import Enzyme from './Enzyme';
import Medicine from './Medicine';

import { logout } from '../../../api/firebase/init';
import { UserType } from '../../../constants/index';

const StyledWrap = styled.div`
  width: 100%;
  min-height: calc(100vh - 140px);
`;

const StyledOutter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
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
  @media (max-width: 1023px) {
    font-size: 16px !important;
  }
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
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    width: 300px;
  }
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
  @media (max-width: 1023px) {
    width: 200px;
  }
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
  @media (max-width: 1023px) {
    width: 80px;
  }
`;

const StyledBorder = styled(Divider)`
  margin: 20px !important;
`;

const StyledAvatar = styled(Avatar)`
  width: 56px !important;
  height: 56px !important;
  margin: 0px 20px 0px 0px;
`;

const StyledLogoutButton = styled(Button)`
  background-color: #e14949 !important;
  font-size: 13px;
  @media (max-width: 1023px) {
    font-size: 12px;
  }
`;

function User(props: { user: UserType }): JSX.Element {
  const { user } = props;
  const { uid, userName, photoUrl } = user;
  const location = useLocation();
  const [input, SetInput] = useState('');
  const query = new URLSearchParams(location.search);
  const type = query.get('type');
  const isProvider = type === 'provider';

  const handleInputChange = (e) => {
    SetInput(e.target.value);
  };

  const name = React.useMemo(() => {
    if (isProvider) {
      if (!input) return '';
      const record = filterItems(input);
      if (Object.keys(record).length) {
        return record.name;
      }
      return '';
    }
  }, [isProvider, input]);

  const enzymeRecords = React.useMemo(() => {
    if (isProvider) {
      if (!input) return [];
      const record = filterItems(input);
      if (Object.keys(record).length) {
        return record.enzyme;
      }
      return [];
    }
    if (!isProvider && data.data[userName] && data.data[userName].uid === uid) {
      return data.data[userName].enzyme;
    }
    return [];
  }, [isProvider, userName, uid, input]);

  const medicineRecords = React.useMemo(() => {
    if (isProvider) {
      if (!input) return [];
      const record = filterItems(input);
      if (Object.keys(record).length) {
        return record.medicine;
      }
      return [];
    }
    if (!isProvider && data.data[userName] && data.data[userName].uid === uid) {
      return data.data[userName].medicine;
    }
    return [];
  }, [isProvider, userName, uid, input]);

  return (
    <StyledWrap>
      <StyledIconWrap>
        <StyledWrapNameLeft>
          <StyledAvatar alt={userName} src={photoUrl} />
          <StyledName variant="h4">{userName}</StyledName>
        </StyledWrapNameLeft>

        <StyledWrapNameRight>
          <StyledLogoutButton variant="contained" endIcon={<LogoutIcon />} onClick={() => logout()}>
            Log Out
          </StyledLogoutButton>
        </StyledWrapNameRight>
      </StyledIconWrap>

      <StyledBorder />

      {isProvider && (
        <StyledOutter>
          <StyledSearchWrap>
            <StyledInput
              placeholder="Name..."
              type="text"
              value={input}
              onChange={handleInputChange}
            />
            <StyledButton>Search</StyledButton>
          </StyledSearchWrap>
        </StyledOutter>
      )}

      {isProvider && (
        <>
          <StyledRecordName variant="h4">Name: {name}</StyledRecordName>
          <StyledBorder />
        </>
      )}

      <StyledRecordName variant="h4">Enzyme Record</StyledRecordName>
      <Enzyme data={enzymeRecords} />

      <StyledBorder />

      <StyledRecordName variant="h4">Medicine Record</StyledRecordName>
      <Medicine data={medicineRecords} />
    </StyledWrap>
  );
}

export default User;
