import styled from "@emotion/styled";
import React from "react";
import { DashContent } from "../styleComponents/uiElements";
import AvailableFunds from "./microComponents/AvailableFunds";
import ProfileBtn from "./microComponents/ProfileBtn";
import SearchBar from "./microComponents/SearchBar";
import SearchResult from "./microComponents/SearchResult";

const AddTitle = styled.h2`
  position: absolute;
  left: 5%;
  top: 17%;
  font-weight: normal;
  font-size: 1.5rem;
`;

const AddCoin = () => {
  return (
    <DashContent>
      <ProfileBtn />
      <AddTitle>Add Crypto</AddTitle>
      <AvailableFunds />
      <SearchBar />
      <SearchResult />
    </DashContent>
  );
};

export default AddCoin;
