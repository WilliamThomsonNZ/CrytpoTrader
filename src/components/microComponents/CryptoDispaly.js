import styled from "@emotion/styled";
import React from "react";
import coinsIcon from "../../imgs/icons/coins.svg";

const CrytpoContainer = styled.div`
  width: 30%;
  height: 50%;
  min-height: 160px;
  border-radius: 15px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  position: relative;
  margin: 0 1.5%;
`;

const CryptoHeader = styled.div`
  width: 100%;
  height: 25%;
  padding: 0 0.5rem;
  border-radius: 15px;
  background: #fbfbfb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;

const CryptoCoinsIcon = styled.img`
  height: 70%;
  display: inline-block;
  margin-right: 0.5rem;
`;

const CryptoTitle = styled.h3`
  margin: 0.7rem;
  text-align: center;
  font-size: 0.9rem;
`;

const CryptoSymbol = styled.img`
  display: block;
  height: 40px;
  width: 40px;
  margin: 0 40%;
`;

const CryptoDisplay = ({ amount, percent, name, icon, worth }) => {
  return (
    <CrytpoContainer>
      <CryptoHeader>
        <div>
          <CryptoCoinsIcon src={coinsIcon} />
          <span>{amount}</span>
        </div>
        <span>% {percent}</span>
      </CryptoHeader>
      <CryptoTitle>{name}</CryptoTitle>
      <CryptoSymbol src={icon} />
      <CryptoTitle>USD ${worth}</CryptoTitle>
    </CrytpoContainer>
  );
};

export default CryptoDisplay;
