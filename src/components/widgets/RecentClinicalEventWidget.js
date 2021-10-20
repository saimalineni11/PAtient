import React from "react";

import { Col, Row, Card } from 'react-bootstrap';
import moment from 'moment';

export default (props) => {
  const {
    classNames,
     heading
  } = props;

  let recentClinicalEventData = [
    {
        "CNDN_NM": "Benign neoplasm of ribs and/or sternum and/or clavicle", 
        "condition_start_date": moment(1209945600000).format("MM/DD/YY"), 
        "condition_end_date":  moment(1209945600000).format("MM/DD/YY")
    },
    {
        "CNDN_NM": "Benign neoplasm of colon", 
        "condition_start_date": moment(1209945600000).format("MM/DD/YY"), 
        "condition_end_date": moment(1209945600000).format("MM/DD/YY")
    }
]

  
  return (
    <Card border="light" className={"shadow-sm " + classNames}>
    <Card.Body>
      <Row className="d-block d-xl-flex align-items-center" style={{margin:"5px"}}>
        <Col>
          <h6 style={{marginBottom: "0px"}}>{heading} <i className="fas fa-info-circle"></i></h6>
        </Col>
      </Row>
        <div style={{marginTop:"2%"}} className="widget-timeline-icon">
            <ul className="timeline">
            {recentClinicalEventData.map((event,i) => 
                    <li>
                        <div className="icon bg-primary"><span className="material-icons">event</span></div>
                        <h6 className="mb-2 mt-1">{event.CNDN_NM}</h6>
                        <p className="fs-15 mb-0 ">
                            <span>
                            Start Date:  {event.condition_start_date}
                            </span>
                            <span style={{marginLeft: "6%",color: "#2781d5"}}>
                            End Date: {event.condition_end_date}
                            </span>
                        </p>
                    </li>
                )}
                </ul>
        </div>
    </Card.Body>
  </Card>
  )
  
}

