import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-piechart-outlabels";
import FormatValue from "../../../utils/tooltipValueFormatmat";

function DoughnutChart(props) {
  let options = {
    responsive: true,
    onClick: (e, elem) => {
      props.onBarClick(e, elem);
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          let hoverVal = data.datasets[0].data[tooltipItem.index];
          let val =
            typeof parseFloat(hoverVal) === "number"
              ? FormatValue(hoverVal, true)
              : hoverVal;
          return val;
        },
      },
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        display: true,
      },
    },
    circumference: 2.4 * Math.PI,
    rotation: props.rotation,

    // radius:20,

    plugins: {
      legend: true,
      outlabels: {
        textAlign: "center",
        text: "%p",
        color: "white",
        // backgroundColor:'white',
        stretch: props.stretch,

        font: {
          resizable: true,
          minSize: 12,
          maxSize: 18,
        },
      },
    },
  };

  return <Doughnut data={props.data} options={options} />;
}
export default DoughnutChart;
