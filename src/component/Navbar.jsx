import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { small } from "../responsive";

import styled from "styled-components";
// import Register from "../pages/Register";
const Container = styled.div`
  height: 60px;
  //   background-color: black;
`;
const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-item: center;
  justify-content: space-between;
  ${small({
    display: "flex",
    alignItem: "center",
    justifycontent: "space_between",
  })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-item: center;
  margin-left: 25px;
  padding: 5px;
  ${small({ width: "30px" })}
`;
const Input = styled.input`
  border: none;
  ${small({ width: "30px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  ${small({ width: "30px" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${small({ width: "10px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${small({ width: "20px", fontSize: "9px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${small({ width: "5px" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${small({ fontSize: "6px" })}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input /> <Search style={{ color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-Commercial</Logo>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/signin" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
