import styled from "@emotion/styled";
import React from "react";
import BuyBtn from "./BuyBtn";
import ResultChart from "./ResultChart";
import SellBtn from "./SellBtn";
const SearchTitle = styled.div`
  width: 90%;
  position: absolute;
  left: 5%;
  display: flex;
  justify-content: space-between;
  bottom: ${(props) => (props.title ? "55%" : "53%")};
`;

const SearchH3 = styled.h3`
  font-weight: normal;
  font-size: ${(props) => (props.title ? "1.2rem" : "1rem")};
  color: ${(props) => (props.title ? "#000" : "#8A8A8A")};
`;

const ChartContainer = styled.div`
  width: 90%;
  height: 30%;
  position: absolute;
  left: 5%;
  bottom: 20%;
`;
const ButtonContainer = styled.div`
  width: 90%;
  position: absolute;
  left: 5%;
  bottom: 10%;
`;

const SearchResult = () => {
  return (
    <>
      <SearchTitle title>
        <SearchH3 title>Bitcoin Cash</SearchH3>
        <SearchH3 title>$2,304.13</SearchH3>
      </SearchTitle>
      <SearchTitle>
        <SearchH3>BCH</SearchH3>
        <SearchH3>USD</SearchH3>
      </SearchTitle>
      <ChartContainer>
        <ResultChart />
      </ChartContainer>
      <ButtonContainer>
        <BuyBtn />
        <SellBtn />
      </ButtonContainer>
    </>
  );
};

export default SearchResult;
