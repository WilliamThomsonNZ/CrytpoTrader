import React, { useState } from "react";
import SignIn from "./components/SignIn";
import DashBoard from "./components/Dashboard";
import { OuterContainer } from "./styleComponents/uiElements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [signedIn, setSignedIn] = useState(true);
  return (
    <OuterContainer>{signedIn ? <DashBoard /> : <SignIn />}</OuterContainer>
  );
}

export default App;
