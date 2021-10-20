import React from "react";

import { Col, Row, Card } from 'react-bootstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';

import DataTable from '../datatable/DataTable';

export default (props) => {
  const {
    heading,
    classNames,
    columns,
    data,
    keyField,
    sizePerPage
  } = props;

  
  return (
  <Card border="light" className={"shadow-sm " + classNames}>
    <Card.Body>
      <Row className="d-block d-xl-flex align-items-center" style={{margin:"5px"}}>
        <Col>
          <h6 style={{marginBottom: "0px"}}>{heading} <i className="fas fa-info-circle"></i></h6>
        </Col>
      </Row>
      <Row style={{margin:"5px"}}> 
        <DataTable
            columns={columns}
            data={data}
            keyField={keyField}
            pagination={paginationFactory({
                sizePerPage: {sizePerPage},
            })}
        />
      </Row>
    </Card.Body>
  </Card>
  )
}

