import React from "react";
import styled from "@emotion/styled";
import NavigationBtn from "./microComponents/NavigationBtn";
import logOut from "../imgs/icons/logout.svg";
import exchange from "../imgs/icons/exchange.svg";
import wallet from "../imgs/icons/wallet.svg";
import logo from "../imgs/logo.svg";

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
      <NavigationBtn
        icon={wallet}
        type={"Portfolio"}
        passedRoute={"/portfolio"}
      />
      <NavigationBtn icon={exchange} type={"Add Coin"} passedRoute={"/add"} />
      <NavigationBtn icon={logOut} type={"Sign Out"} passedRoute={"/signUp"} />
    </SideBarContainer>
  );
};

export default SideBar;
