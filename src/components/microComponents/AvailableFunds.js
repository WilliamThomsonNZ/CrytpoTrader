import styled from "@emotion/styled";
import React from "react";

const AFContainer = styled.div`
  position: absolute;
  right: 5%;
  top: 17%;
`;

const AFSmallText = styled.span`
  display: block;
  font-size: 0.7rem;
`;

const AF = styled.h3`
  display: block;
  font-size: 1.2rem;
  font-weight: normal;
`;

const AvailableFunds = () => {
  return (
    <AFContainer>
      <AFSmallText>Available Funds</AFSmallText>
      <AF>USD $12,448.00</AF>
    </AFContainer>
  );
};

export default AvailableFunds;
