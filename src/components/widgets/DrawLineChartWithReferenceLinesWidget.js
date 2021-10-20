
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card } from 'react-bootstrap';

import LineChart from "../common-chart/LineChart/LineChart";

import "./widgets.css";

export default (props) => {
  const {
    classNames,
    chartName
  } = props;

const PURPLE = "#68057C";
const GREEN = "#5BB724";
const GREEN_LIGHT = "#57C592";
const RED = "#FF0000";
const BLUE = "#007EDF";
const WHITE = "#fff";

  let lineChartData = {
    labels: ["Jan 21","Mar 21","Jun 21","Sep 21","Dec 21"],
    datasets: [{
        label: "All LOBs-dotted",
        fill:false,
        data: [80, 79, 45, 40, 35],
        borderDash: [3, 3],
        borderWidth: 2,
        backgroundColor: GREEN_LIGHT,
        borderColor: GREEN_LIGHT,
        hoverBackgroundColor: GREEN_LIGHT,
        hoverBorderColor: GREEN_LIGHT,
      },
      {
          label: "All LOBs",
          data: [80, 79, 45, ],
          fill:false,
          borderWidth: 3,
          backgroundColor: GREEN_LIGHT,
            borderColor: GREEN_LIGHT,
            hoverBackgroundColor: GREEN_LIGHT,
            hoverBorderColor: GREEN_LIGHT,
      },
      {
        label: "Benchmark-dotted",
        fill:false,
        data: [40, 52, 60, 64, 69],
        borderDash: [3, 3],
        borderWidth: 2,
        backgroundColor: PURPLE,
        borderColor: PURPLE,
        hoverBackgroundColor: PURPLE,
        hoverBorderColor: PURPLE,
    },
    {
        label: "Benchmark",
        data: [40, 52, 60, 64, ],
        fill:false,
        borderWidth: 3,
        backgroundColor: PURPLE,
          borderColor: PURPLE,
          hoverBackgroundColor: PURPLE,
          hoverBorderColor: PURPLE,
    }]
  };
  
  let marketing = ['Jun 21'];
  let amount = [50];
  let annotations = marketing.map(function(date, index) {
     return {
        type: 'line',
        id: 'vline' + index,
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: date,
        borderColor: 'red',
        borderWidth: 2,
        label: {
           enabled: true,
           position: "center",
          //  content: amount[index]
        }
     }
  });

  return (
    <Card border="light" className={"shadow-sm " + classNames}>
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center" style={{margin:"5px"}}>
          <Col>
            <h6 style={{marginBottom: "0px"}}>{chartName} <i className="fas fa-info-circle"></i></h6>
          </Col>
        </Row>
        <LineChart chartData={lineChartData} annotations={annotations}/>
      </Card.Body>
    </Card>
  );
};