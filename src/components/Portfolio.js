import React from "react";
import ProfileBtn from "./microComponents/ProfileBtn";
import YourCrypto from "./YourCrypto";
import ProfileWorth from "./microComponents/ProfileWorth";
import PortfolioChart from "./microComponents/PortfolioChart";
import { DashContent } from "../styleComponents/uiElements";

const Portfolio = () => {
  return (
    <DashContent>
      <ProfileBtn />
      <ProfileWorth />
      <PortfolioChart />
      <YourCrypto />
    </DashContent>
  );
};

export default Portfolio;
