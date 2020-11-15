import React, { useState } from "react";
import SignIn from "./components/SignIn";
import DashBoard from "./components/Dashboard";
import { OuterContainer } from "./styleComponents/uiElements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <OuterContainer>
      {signedIn ? (
        <DashBoard />
      ) : (
        <SignIn
          setSignedIn={() => {
            setSignedIn((state) => !state);
          }}
        />
      )}
    </OuterContainer>
  );
}

export default App;
