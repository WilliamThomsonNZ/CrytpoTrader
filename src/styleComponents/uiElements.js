import styled from "@emotion/styled";

//Landing page styled elements

export const OuterContainer = styled.div`
  background-color: grey;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.main`
  width: 900px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fefefe;
`;

export const Logo = styled.img`
  display: block;
  width: 40%;
  height: auto;
  padding-top: 3rem;
  margin: 0 auto;
`;

export const LandingImg = styled.img`
  display: block;
  width: 40%;
  height: auto;
  margin: 5rem auto 5rem auto;
`;

export const LandingBtn = styled.button`
  display: block;
  margin: 2rem auto;
  width: 35%;
  padding: 1.5rem 0 1.5rem 6rem;
  background: none;
  border: none;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  color: #393939;
  position: relative;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnIcon = styled.img`
  margin-right: 1.5rem;
  position: absolute;
  top: 25%;
  left: 10%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  height: 100%;
`;
