import React from "react";
import styled from "@emotion/styled";

const NavBarBtn = styled.button`
  display: block;
  width: 80%;
  margin: 3rem auto;
`;
const NavBarIcon = styled.div`
  width: 70%;
  margin: 0.5rem auto;
  display: block;
`;

const NavigationBtn = ({ icon, type, passedRoute }) => {
  return (
    <NavBarBtn>
      <NavBarIcon src={icon} />
      {type}
    </NavBarBtn>
  );
};

export default NavigationBtn;
