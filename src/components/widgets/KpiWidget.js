
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card } from 'react-bootstrap';

import "./widgets.css";

export default (props) => {
  const { title, value, period, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <div className="kpi top-color">
          <Row className="d-block d-xl-flex align-items-center kpi">
            <Col>
              <div className="d-none d-sm-block">
                <p style={{marginBottom: "0px"}}  className="kpi-heading">{title}</p>
                <small className="kpi-sub-heading">{period}</small>
              </div>
              <div className="kpi-data">
                <div className="alignleft">
                  <p className="kpi-value">{value}</p>
                </div>
                <div className="alignright">
                  <p className={`${percentageColor} fw-bold per`}>
                      {percentage && percentage.length > 0
                        ? <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
                        :  null}
                      {percentage && percentage.length > 0
                        ? percentage+"%"
                        :  null}
                  </p>
                  {/* <small>{"Below Benchmark"}</small> */}
                </div>
              </div>
              <div style={{clear: "both"}}></div>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};