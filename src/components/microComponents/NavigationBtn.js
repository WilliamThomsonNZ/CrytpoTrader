import React from "react";
import styled from "@emotion/styled";

const NavBarBtn = styled.button`
  font-size: 1.1rem;
  display: block;
  width: 80%;
  margin: 4rem auto;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;
const NavBarIcon = styled.img`
  width: 25%;
  margin: 0.5rem auto;
  display: block;
`;

const NavigationBtn = ({ icon, type }) => {
  return (
    <NavBarBtn>
      <NavBarIcon src={icon} />
      {type}
    </NavBarBtn>
  );
};

export default NavigationBtn;
