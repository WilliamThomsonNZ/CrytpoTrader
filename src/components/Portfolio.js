import React from "react";
import ProfileBtn from "./microComponents/ProfileBtn";
import YourCrypto from "./YourCrypto";
import { DashContent } from "../styleComponents/uiElements";
import PortFolioContent from "./PortfolioContent";

const Portfolio = () => {
  return (
    <DashContent>
      <ProfileBtn />
      <PortFolioContent />
      <YourCrypto />
    </DashContent>
  );
};

export default Portfolio;
