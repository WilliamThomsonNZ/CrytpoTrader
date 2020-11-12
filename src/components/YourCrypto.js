import React from "react";
import styled from "@emotion/styled";
import CryptoDisplay from "./microComponents/CryptoDispaly";
import bitcoin from "../imgs/bitcoin.svg";
import ethereum from "../imgs/icons/ethereum.svg";

const CurrentCoins = styled.section`
  position: absolute;
  bottom: 0;
  right: 5%;
  height: 40%;
  width: 90%;
  padding-top: 2rem;
  border-top: 1px solid #dcdcdc;
  display: flex;
`;
const SectionTitle = styled.h2`
  left: 5%;
  bottom: 41.5%;
  margin-bottom: 1rem;
  font-weight: normal;
  font-size: 1rem;
  position: absolute;
`;

const YourCrypto = () => {
  return (
    <>
      <SectionTitle>Your Crypto</SectionTitle>
      <CurrentCoins>
        <CryptoDisplay
          icon={bitcoin}
          amount="2.056"
          worth="23,003.19"
          name="Bitcoin"
          percent="+7.34"
        />
        <CryptoDisplay
          icon={ethereum}
          amount="7.36"
          worth="6,679.01"
          name="Ethereum"
          percent="+2.34"
        />
      </CurrentCoins>
    </>
  );
};

export default YourCrypto;
