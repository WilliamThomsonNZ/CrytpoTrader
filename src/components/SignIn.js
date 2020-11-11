import React from "react";
import {
  Container,
  Logo,
  LandingImg,
  LandingBtn,
  BtnIcon,
} from "../styleComponents/uiElements";
import logoImg from "../imgs/logo.svg";
import landingPage from "../imgs/landingImg.svg";
import bitcoinIcon from "../imgs/bitcoin.svg";
import googleIcon from "../imgs/google.svg";

const SignIn = () => {
  return (
    <Container>
      <Logo src={logoImg} />
      <LandingImg src={landingPage} />
      <LandingBtn>
        <BtnIcon src={googleIcon} />
        Sign In With Google
      </LandingBtn>
      <LandingBtn>
        <BtnIcon src={bitcoinIcon} />
        View Live Demo
      </LandingBtn>
    </Container>
  );
};

export default SignIn;
