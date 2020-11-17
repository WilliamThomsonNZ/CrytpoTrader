import styled from "@emotion/styled";
import React from "react";

const WorthHeading = styled.h2`
  font-weight: normal;
  font-size: 1rem;
  color: #6e6e6e;
  text-align: center;
  margin-bottom: 0.3rem;
`;

const WorthValue = styled.h2`
  color: #f9a826;
  font-size: 1.8rem;
  text-align: center;
`;

const ProfileWorthContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 20%;
`;
const ProfileWorth = ({ worth }) => {
  return (
    <ProfileWorthContainer>
      <WorthHeading>Portfolio Value</WorthHeading>
      <WorthValue>${worth}13,034.22</WorthValue>
    </ProfileWorthContainer>
  );
};

export default ProfileWorth;
