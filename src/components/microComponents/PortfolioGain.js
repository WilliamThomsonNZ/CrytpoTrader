import styled from "@emotion/styled";
import React from "react";

const GainText = styled.p`
  color: #ababab;
  font-size: 1rem;
  position: absolute;
  width: 80%;
  left: 10%;
  top: 30%;
  text-align: center;
`;
const GainHeading = styled.h3`
  position: absolute;
  top: ${(props) => (props.dollar ? "50%" : "70%")};
  width: 80%;
  left: 10%;
  text-align: center;
  color: #ababab;
  font-size: 1rem;
  font-weight: normal;
`;
const GainValue = styled.h2`
  color: ${(props) => (props.dollar ? "#00A527" : "000")};
  font-size: 2.5rem;
  position: absolute;
  width: 80%;
  left: 10%;
  top: ${(props) => (props.dollar ? "40%" : "60%")};
  text-align: center;
`;

const PortfolioGain = () => {
  return (
    <>
      <GainText>Your Portfolio value is $13,004.23</GainText>
      <GainValue dollar>+$362.30</GainValue>
      <GainHeading dollar>Total returns</GainHeading>
      <GainValue>+6.23%</GainValue>
      <GainHeading>Total Percent</GainHeading>
    </>
  );
};

export default PortfolioGain;
