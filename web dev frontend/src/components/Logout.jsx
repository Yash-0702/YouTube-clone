import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";


const Container = styled.div`
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.soft};
  border :none;
 
`;

const Wrapper = styled.div`
  
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  padding: 0px 10px;
 
  


  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  
`;

const button = styled.button`
cursor: pointer;
`;

function UserLogoSetting() {
  
  return (
    <Container>
      <Wrapper>
        <Item>
          <ExitToAppOutlinedIcon />
          Sign out
        </Item>
        
      </Wrapper>
    </Container>
  );
}

export default UserLogoSetting; ;



