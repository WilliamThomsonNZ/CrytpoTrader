import React from "react";
import SideBar from "./SideBar";
import Portfolio from "./Portfolio";
import AddCoin from "./AddCoin";
import { Container, Grid } from "../styleComponents/uiElements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <Router>
      <Container>
        <Grid>
          <SideBar />
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/add-crypto" component={AddCoin} />
          </Switch>
        </Grid>
      </Container>
    </Router>
  );
};

export default Dashboard;
