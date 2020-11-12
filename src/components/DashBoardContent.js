import React from "react";
import ProfileBtn from "./microComponents/ProfileBtn";
import YourCrypto from "./YourCrypto";
import styled from "@emotion/styled";

const DashContent = styled.main`
  position: relative;
  height: 100%;
`;

const DashBoardContent = () => {
  return (
    <DashContent>
      <ProfileBtn />
      <YourCrypto />
    </DashContent>
  );
};

export default DashBoardContent;
