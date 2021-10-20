import React,  { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';

import SensitiveInformationSwitchWidget from "../../components/widgets/SensitiveInformationSwitchWidget";

export default (props) => {
    const {
        displaySensitiveSwtichBtn
    } = props;
    return (
        <Card border="light" className="shadow-sm filter-row">
            <Card.Body>
                <div className="row">
                    <div className="col-10">
                        <div className="row">
                            <div className="col-2">
                                <label className="mt-1 ml-2 label-key">Program: </label>
                                <label className="mt-1 ml-2 label-value">Program1</label>
                            </div>
                            <div className="col-3">
                                <label className="mt-1 ml-2 label-key">Product: </label>
                                <label className="mt-1 ml-2 label-value">HMO</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <label className="mt-1 ml-2 label-key">LOB: </label>
                                <label className="mt-1 ml-2 label-value">Medicaid</label>
                            </div>
                            <div className="col-3">
                                <label className="mt-1 ml-2 label-key">Reporting Date: </label>
                                <label className="mt-1 ml-2 label-value">May 2021</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-2" style={{display:displaySensitiveSwtichBtn?'block':'none'}}>
                        <SensitiveInformationSwitchWidget/>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
  }