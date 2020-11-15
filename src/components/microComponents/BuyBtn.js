import React from "react";
import Buy from "../../imgs/icons/buy.svg";
import { TradeButton, TradeIcon } from "../../styleComponents/uiElements";

const BuyBtn = () => {
  return (
    <TradeButton>
      <TradeIcon src={Buy} alt="Buy" />
      Buy
    </TradeButton>
  );
};

export default BuyBtn;
