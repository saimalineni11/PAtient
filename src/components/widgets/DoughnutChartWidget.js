import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-piechart-outlabels";
import FormatValue from "../../utils/tooltipValueFormat";

import { Col, Row, Card } from 'react-bootstrap';

export default (props) => {
  const {
    classNames,
    dataset, 
    chartName, 
    ...otherProps
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
        position:"bottom",
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
            stretch: 30,
            font: {
                resizable: true,
                minSize: 12,
                maxSize: 18
            }
        }
    },

}


  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const color1 = ctx.createLinearGradient(0, 300, 0, 0);
  color1.addColorStop(0.09, "#5ef382");
  color1.addColorStop(0.91, "#17c1c1");
  const color2 = ctx.createLinearGradient(0, 300, 0, 0);
  color2.addColorStop(0.13, "#975fe4");
  color2.addColorStop(0.79, "#40a0ff");
  const color3 = ctx.createLinearGradient(0, 300, 0, 0);
  color3.addColorStop(0.15, "#fbd44b");
  color3.addColorStop(0.91, "#f3667c");
  const color4 = ctx.createLinearGradient(0, 300, 0, 0);
  color4.addColorStop(0.15, "#7303c0");
  color4.addColorStop(0.91, "#ec38bc");


  const dataObj = {
    labels: dataset.labels,
    datasets: [{
        label: dataset.label,
        backgroundColor: [color1, color2, color3, color4],
        data: dataset.data
    }]
}

  
  return (
    <Card border="light" className={"shadow-sm " + classNames}>
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center" style={{margin:"5px"}}>
          <Col>
            <h6 style={{marginBottom: "0px"}}>{chartName} <i className="fas fa-info-circle"></i></h6>
          </Col>
        </Row>
        <Doughnut data={dataObj} options={options} {...otherProps} />
      </Card.Body>
    </Card>
  )
  
}

