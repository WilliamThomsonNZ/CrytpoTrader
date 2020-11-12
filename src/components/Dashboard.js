import React from "react";
import SideBar from "./SideBar";
import DashBoardContent from "./DashBoardContent";
import { Container, Grid } from "../styleComponents/uiElements";

const Dashboard = () => {
  return (
    <Container>
      <Grid>
        <SideBar />
        <DashBoardContent />
      </Grid>
    </Container>
  );
};

export default Dashboard;
