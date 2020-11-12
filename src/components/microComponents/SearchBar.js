import styled from "@emotion/styled";
import React from "react";
const SearchBarInput = styled.input`
  width: 90%;
  padding: 0.75rem;
  background-color: #fbfbfb;
  border: none;
  left: 5%;
  position: absolute;
  top: 25%;
`;

const SearchBar = () => {
  return <SearchBarInput placeholder="Enter Crypto" />;
};

export default SearchBar;
