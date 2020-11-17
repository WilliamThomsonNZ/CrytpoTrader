import styled from "@emotion/styled";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const ChartContainer = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  left: 0;
  top: 37%;
`;
const PortfolioChart = () => {
  return (
    <ChartContainer>
      <Doughnut
        data={data}
        width={50}
        height={25}
        options={{ maintainAspectRatio: false }}
      />
    </ChartContainer>
  );
};

export default PortfolioChart;
