import React from "react";
import SignIn from "./components/SignIn";
import DashBoard from "./components/Dashboard";
import { OuterContainer } from "./styleComponents/uiElements";

function App() {
  return (
    <OuterContainer>
      <SignIn />
      {/* <DashBoard /> */}
    </OuterContainer>
  );
}

export default App;
