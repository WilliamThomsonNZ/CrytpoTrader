import React from "react";
import styled from "@emotion/styled";
import NavigationBtn from "./microComponents/NavigationBtn";
import logOut from "../imgs/icons/logout.svg";
import exchange from "../imgs/icons/exchange.svg";
import wallet from "../imgs/icons/wallet.svg";

const SideBarContainer = styled.aside`
  width: 20%;
  height: 100%;
  background-color: #fcfcfc;
`;

//Create sidebar logo image
const SideBar = () => {
  return (
    <SideBarContainer>
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
