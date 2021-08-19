import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Data", "Warehouse", "Apps", "Object", "Storage", "Oracle Database"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options1 = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function Charts() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box>
            <Bar data={data} options1={options1} />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <Bar data={data} options={options} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Charts;
