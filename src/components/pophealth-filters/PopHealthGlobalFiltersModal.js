import React,  { useState, useEffect } from "react";
import { Button, Card, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import GlobalFiltersWidget from "../../components/pophealth-filters/GlobalFiltersWidget";

export default (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Pop Health Filters
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GlobalFiltersWidget/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="light">Cancel</Button>
          <Button onClick={props.onHide}>Apply</Button>
        </Modal.Footer>
      </Modal>
    );
  }