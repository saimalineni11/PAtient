import React,  { useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";
import AxesValueFormatter from "../../utils/axesValueFormatter";
import FormatValue from "../../utils/tooltipValueFormat";

import { Col, Row, Card } from "react-bootstrap";

export default (props) => {
  const { dataset, chartName, yAxesLabel, xAxesLabel, colors } = props;

  const [datasetObj, setDatasetObj] = useState({});

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const horiLow = ctx.createLinearGradient(0, 0, 300, 0);
  horiLow.addColorStop(0.13, "#975fe4");
  horiLow.addColorStop(0.79, "#40a0ff");

  useEffect(() => {
    console.log(colors)
    setDatasetObj({
      labels: dataset.labels,
      datasets: [
        {
          label:  yAxesLabel ,
          backgroundColor: colors,
          borderColor:  colors,
          borderWidth: 1,
          hoverBackgroundColor:  colors,
          hoverBorderColor:  colors,
          data: dataset.data,
        },
      ],
    });
  }, [dataset, colors]);

  let options = {
    onClick: (e, elem) => {
      //props.onBarClick(e,elem);
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
            display: false,
            drawBorder: false,
            borderDash: [3, 3],
            zeroLineColor: "#efefef",
          },
          ticks: {
            callback: (value, index, values) => {
              return typeof value === "number"
                ? AxesValueFormatter(value)
                : value;
            },
          },
          scaleLabel: {
            display: true,
            labelString: xAxesLabel,
            fontColor: "#808080",
            fontStyle: "bold",
            fontSize: "12",
            fontFamily: "Lato",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
            borderDash: [3, 3],
            zeroLineColor: "#efefef",
          },
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
            labelString: yAxesLabel,
            fontColor: "#808080",
            fontStyle: "bold",
            fontSize: "12",
            fontFamily: "Lato",
          },
        },
      ],
    },
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row
          className="d-block d-xl-flex align-items-center"
          style={{ margin: "5px" }}
        >
          <Col>
            <h6 style={{ marginBottom: "0px" }}>
              {chartName}{" "}
              <i
                className="fas fa-info-circle"
                style={{ color: "#6FC2B4" }}
              ></i>
            </h6>
          </Col>
        </Row>
        <HorizontalBar data={datasetObj} options={options} />
      </Card.Body>
    </Card>
  );
};
