import styled from "@emotion/styled";
import React from "react";

const InitialBtn = styled.button`
  background-color: #c2185b;
  color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  border: none;
  margin-top: 2rem;
`;

const Profile = styled.div`
  position: absolute;
  right: 5%;
  top: 2%;
`;

const Name = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  display: inline-block;
`;

const ProfileButton = ({ initial, name }) => {
  return (
    <Profile>
      <InitialBtn>W</InitialBtn>
      <Name>William Thomson</Name>
    </Profile>
  );
};

export default ProfileButton;
