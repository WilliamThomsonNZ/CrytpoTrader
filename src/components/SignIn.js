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
import { signInWithGoogle } from "../firebase";

const SignIn = ({ setSignedIn }) => {
  return (
    <Container>
      <Logo src={logoImg} />
      <LandingImg src={landingPage} />
      <LandingBtn onClick = {() => signInWithGoogle()}>
        <BtnIcon src={googleIcon} />
        Sign In With Google
      </LandingBtn>

      <LandingBtn
        onClick={() => {
          setSignedIn();
        }}
      >
        <BtnIcon src={bitcoinIcon} />
        View Live Demo
      </LandingBtn>
    </Container>
  );
};

export default SignIn;
