import React from "react";
import Sell from "../../imgs/icons/sell.svg";
import { TradeButton, TradeIcon } from "../../styleComponents/uiElements";

const SellBtn = () => {
  return (
    <TradeButton>
      <TradeIcon src={Sell} alt="Sell" />
      Sell
    </TradeButton>
  );
};

export default SellBtn;
