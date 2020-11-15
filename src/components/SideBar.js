import React from "react";
import styled from "@emotion/styled";
import NavigationBtn from "./microComponents/NavigationBtn";
import logOut from "../imgs/icons/logout.svg";
import exchange from "../imgs/icons/exchange.svg";
import wallet from "../imgs/icons/wallet.svg";
import logo from "../imgs/logo.svg";
import { Link, Redirect } from "react-router-dom";

const SideBarContainer = styled.aside`
  height: 100%;
  background-color: #fcfcfc;
`;
const SideBarLogo = styled.img`
  width: 90%;
  margin: 0 auto;
  display: block;
  padding-top: 3rem;
`;

//Create sidebar logo image
const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarLogo src={logo} />
      <Link exact to="/" style={{ textDecoration: "none" }}>
        <NavigationBtn icon={wallet} type={"Portfolio"} />
      </Link>
      <Link exact to="/add-crypto" style={{ textDecoration: "none" }}>
        <NavigationBtn icon={exchange} type={"Add Crypto"} />
      </Link>
      <NavigationBtn icon={logOut} type={"Sign Out"} />
    </SideBarContainer>
  );
};

export default SideBar;
