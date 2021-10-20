import React from "react";
import { useContext} from "react";
import Button from "react-bootstrap/Button";
import { Col, Row, Card,TabContainer, Tab, Nav } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import classNames from "classnames";

function AccordionCustomToggle({ eventKey, callback, text }) {
  const currentEventKey = useContext(AccordionContext); // <-- Will update every time the eventKey changes.
  const toggleOnClick = useAccordionToggle(eventKey, () => {
    callback && callback(eventKey);
  });
  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className={classNames("collapse-btn-style")}
      onClick={toggleOnClick}
    >
      {text}{" "}
      {isCurrentEventKey ? (
        <i class="arrow down"></i>
      ) : (
        <i className="arrow right"></i>
      )}
    </button>
  );
}

export default (props) => {
  const {activatedLink,handleLinkSelect} = props;

  let patient = {
    name: "Gerald Harris",
    riskScore: 75,
    patientId: 12134,
    gender: "Male",
    lob: "Medicare",
    product: "HMO",
    age: 65,
    email: "121@abc.com",
    mobile: "123456789",
    city: "Boston, MA",

    costAnalysis: {
      pastYearCost: "$124,214",
      avgYearCost: "$124,214",
      savingsOppurtunities: "$124,214",
    },

    comorbidities: ["Condition1", "Condition2", "Condition3"],
  };

  let navigationOptions = [
    {
      label: "Cost Analysis",
      value: 1,
    },
    {
        label:"Opportunity Value",
        value:2
    },
    {
      label: "Inpatient Admissions",
      value: 3,
    },
    {
      label: "ER Analysis",
      value: 4,
    },
    {
      label: "Pharmacy / Treatment",
      value: 5,
    },
    {
      label: "HCC Opportunities",
      value: 6,
    },
    {
      label: "Digital Engagement",
      value: 7,
    },
  ];
  const handleClick=(selectedOption)=>{
    handleLinkSelect(selectedOption)
  }
  console.log(activatedLink)
  const renderLinks=()=>{
      let navList=navigationOptions.length && navigationOptions.map((item,index)=>{
          return(
              <li key={index} className={`widget_link ${item.value===activatedLink.value ? "widget_link-active":""}`} onClick={()=>{handleClick(item)}}>
                  {item.label}
              </li>
          )
      })
    return navList
  }

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <section className="sideinfo_widget">
            <ul className="sideinfo_widget-wrapper">
                {renderLinks()}
            </ul>
        </section>
        {/* <Row className="d-block d-xl-flex" style={{ margin: "8px" }}>
          <h6 style={{ marginBottom: "0px" }}>
            {"Member Profile"} <i className="fas fa-info-circle"></i>
          </h6>
        </Row>
        <Row className="d-block d-xl-flex" style={{ margin: "5px" }}>
          <div>
            <label className="mt-1 ml-3 title-heading">{patient.name}</label>
            <label className="title-subheading">{patient.riskScore}</label>
          </div>
        </Row>
        <Row className="d-block d-xl-flex" style={{ margin: "5px" }}>
          <Accordion defaultActiveKey="0">
            <div className="accordion-data-div">
              <AccordionCustomToggle eventKey="0" text="Basics" />
              <Accordion.Collapse eventKey="0">
                <div className="panel-body">
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">
                      Patient Id:{" "}
                    </label>
                    <label className="title-subheading">
                      {patient.patientId}
                    </label>
                  </div>
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">Gender: </label>
                    <label className="title-subheading">{patient.gender}</label>
                  </div>
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">LOB: </label>
                    <label className="title-subheading">{patient.lob}</label>
                  </div>
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">Product: </label>
                    <label className="title-subheading">
                      {patient.product}
                    </label>
                  </div>
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">Age: </label>
                    <label className="title-subheading">{patient.age}</label>
                  </div>
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">Email: </label>
                    <label className="title-subheading">{patient.email}</label>
                  </div>
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">Mobile: </label>
                    <label className="title-subheading">{patient.mobile}</label>
                  </div>
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">City: </label>
                    <label className="title-subheading">{patient.city}</label>
                  </div>
                </div>
              </Accordion.Collapse>
            </div>

            <div className="accordion-data-div">
              <AccordionCustomToggle eventKey="1" text="Cost Analysis" />
              <Accordion.Collapse eventKey="1">
                <div className="panel-body">
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">
                      Past year cost:{" "}
                    </label>
                    <label className="title-subheading">
                      {patient.costAnalysis.pastYearCost}
                    </label>
                  </div>
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">
                      Avg. year cost:{" "}
                    </label>
                    <label className="title-subheading">
                      {patient.costAnalysis.avgYearCost}
                    </label>
                  </div>
                  <div className="pt-details">
                    <label className="mt-1 ml-3 title-heading">
                      Saving opportunities:{" "}
                    </label>
                    <label className="title-subheading">
                      {patient.costAnalysis.savingsOppurtunities}
                    </label>
                  </div>
                </div>
              </Accordion.Collapse>
            </div>

            <div className="accordion-data-div">
              <AccordionCustomToggle eventKey="2" text="Comorbidities" />
              <Accordion.Collapse eventKey="2">
                <div className="panel-body">
                  {patient.comorbidities.map((item) => (
                    <div className="pt-details">
                      <label className="mt-1 ml-3 title-heading">{item}</label>
                    </div>
                  ))}
                </div>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </Row> */}
        <section className="sideinfo_widget">
            {

            }
        </section>
      </Card.Body>
    </Card>
  );
};
