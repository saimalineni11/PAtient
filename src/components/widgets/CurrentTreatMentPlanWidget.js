import React from "react";

import { Col, Row, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'

export default (props) => {
  const {
    classNames,
     heading
  } = props;

  let currentTreatmentPlanData =  [{"drug_nm": "24 HR Lovastatin 60 MG Extended Release Oral Tablet [Altocor]", "drug_exposure_start_date": "04/04/08", "drug_exposure_end_date": "05/03/08"}]

  
  return (
    <Card border="light" className={"shadow-sm " + classNames}>
    <Card.Body>
      <Row className="d-block d-xl-flex align-items-center" style={{margin:"5px"}}>
        <Col>
          <h6 style={{marginBottom: "0px"}}>{heading} <i className="fas fa-info-circle"></i></h6>
        </Col>
      </Row>
        <div style={{marginTop:"2%"}} className="widget-treatment-timeline-icon">
            <ul className="timeline">
            {currentTreatmentPlanData.map((plan,i) => 
                    <li>
                        <div className="icon bg-primary"><span className="material-icons">add_moderator</span></div>
                        <h6 className="mb-2 mt-1">{plan.drug_nm}</h6>
                        <p className="fs-15 mb-0 ">
                            <span>
                            Start Date:  {plan.drug_exposure_start_date}
                            </span>
                            <span style={{marginLeft: "6%",color: "#711685"}}>
                            End Date: {plan.drug_exposure_end_date}
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

