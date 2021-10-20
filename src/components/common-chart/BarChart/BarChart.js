import React from "react";
import { Bar } from "react-chartjs-2";
import AxesValueFormatter from "../../../utils/axesValueFormatter";
import FormatValue from "../../../utils/tooltipValueFormat";

function BarChart(props) {
  let options = {
    responsive: true,
    //maintainAspectRatio: false,
    onClick: (e, elem, f) => {
      props.onBarClick(e, elem, f);
    },
    legend: {
      display: false,
      position: "bottom",
      labels: {
        display: true,
      },
    },
    barValueSpacing: 100,
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
            zeroLineWidth: 1,
            borderDash: [8, 4],
            color: props.gridLineColor,
            zeroLineColor: "#efefef",
          },
          barPercentage: props.barPercentage,
          categoryPercentage: props.categoryPercentage,
          ticks: {
            callback: (value, index, values) => {
              return typeof value === "number"
                ? AxesValueFormatter(value)
                : value;
            },
          },
          scaleLabel: {
            display: true,
            labelString: props.XAxesLabel,
            fontColor: "#808080",
            fontStyle: "bold",
            fontSize: props.fontSize,
            fontFamily: "Lato",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            borderDash: [8, 4],
            zeroLineWidth: 1,
            color: props.gridLineColor,
            zeroLineColor: "#efefef",
          },
          ticks: {
            callback: (value, index, values) => {
              return typeof value === "number"
                ? AxesValueFormatter(value)
                : value;
            },
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: props.YAxesLabel,
            fontColor: "#808080",
            fontStyle: "bold",
            fontSize: props.fontSize,
            fontFamily: "Lato",
          },
        },
      ],
    },
  };

  return <Bar data={props.data} options={options} />;
}
export default BarChart;
