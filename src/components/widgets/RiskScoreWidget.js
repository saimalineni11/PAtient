import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-piechart-outlabels";
import FormatValue from "../../utils/tooltipValueFormat";

import { Col, Row, Card } from 'react-bootstrap';

export default (props) => {
  const {
    className,
    dataset, 
    chartName, 
  } = props;

  let options={
    responsive: true,
    maintainAspectRatio: true,
    onClick : (e,elem) =>{
        // props.onBarClick(e,elem);
        
    },
    tooltips :{
        callbacks:{
            label : (tooltipItem,data) => {
                let hoverVal = data.datasets[0].data[tooltipItem.index];
                let val = typeof(parseFloat(hoverVal)) === "number" ? FormatValue(hoverVal , true) : hoverVal;
                return val;
            }
        }
    },
    legend:{
        display:true,
        position:"right",
        labels:{
            display:true,
        }
    },
      rotation : 12,
    //  circumference: 2.4*Math.PI,
    //  radius:10,


    plugins: {
        legend: true,
        outlabels: {
            textAlign:'center',
            text: '%p',
            color: 'white',
            // backgroundColor:'white',
            stretch: 20,
            font: {
                resizable: true,
                minSize: 12,
                maxSize: 12
            }
        }
    },

}


  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const high = ctx.createLinearGradient(0, 300, 0, 0);
  high.addColorStop(0.09, "#054558");
  high.addColorStop(0.91, "#054558");
  const low = ctx.createLinearGradient(0, 300, 0, 0);
  low.addColorStop(0.13, "#067B63");
  low.addColorStop(0.79, "#067B63");
  const med = ctx.createLinearGradient(0, 300, 0, 0);
  med.addColorStop(0.15, "#0193EB");
  med.addColorStop(0.91, "#0193EB");

  const dataObj = {
    labels: dataset.labels,
    datasets: [{
        label: dataset.label,
        backgroundColor: [high, med, low],
        data: dataset.data
    }]
}

  
  return (
    <Card border="light" className={"shadow-sm " + className}>
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center" style={{margin:"5px"}}>
          <Col>
            <h6 style={{marginBottom: "0px"}}>{chartName} <i className="fas fa-info-circle" style={{color: "#6FC2B4"}}></i></h6>
          </Col>
        </Row>
        <Doughnut data={dataObj} options={options} />
      </Card.Body>
    </Card>
  )
  
}

