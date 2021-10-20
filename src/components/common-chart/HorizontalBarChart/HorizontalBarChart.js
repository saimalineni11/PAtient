import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import AxesValueFormatter from "../../../utils/axesValueFormatter";
import FormatValue from "../../../utils/tooltipValueFormat";

function HorizontalBarChart(props) {
  let options = {
    responsive: true,
    maintainAspectRatio: false,
    onClick: (e, elem) => {
      props.onBarClick(e, elem);
    },
    legend: {
      display: false,
      position: "bottom",
      labels: {
        display: true,
      },
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem) => {
          let val =
            typeof parseFloat(tooltipItem.value) === "number"
              ? FormatValue(tooltipItem.value, true)
              : tooltipItem.value;
          return val;
        },
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            lineWidth: 0,
            zeroLineWidth: 1,
            zeroLineColor: "#efefef",
          },
          stacked: true,
          ticks: {
            callback: (value, index, values) => {
              return typeof value === "number"
                ? AxesValueFormatter(value)
                : value;
            },
          },
          scaleLabel: {
            display: true,
            labelString: "Patient Counts",
            fontColor: "#808080",
            fontStyle: "bold",
            fontSize: "16",
            fontFamily: "Lato",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            lineWidth: 0,
            zeroLineWidth: 1,
            zeroLineColor: "#efefef",
          },
          stacked: true,
          ticks: {
            callback: (value, index, values) => {
              return typeof value === "number"
                ? AxesValueFormatter(value)
                : value;
            },
            min: 10,
          },
          scaleLabel: {
            display: true,
            labelString: "Age",
            fontColor: "#808080",
            fontStyle: "bold",
            fontSize: "16",
            fontFamily: "Lato",
          },
        },
      ],
    },
  };

  return <HorizontalBar data={props.data} options={options} />;
}
export default HorizontalBarChart;
