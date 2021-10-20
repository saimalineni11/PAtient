import React, { useState } from "react";

import LineChartWithReferenceLinesWidget from "../../components/widgets/LineChartWithReferenceLinesWidget";
import DoughnutChartWidget from "../../components/widgets/DoughnutChartWidget";
import SideMemberInfoWidget from "../../components/widgets/SideMemberInfoWidget";
import CurrentTreatMentPlanWidget from "../../components/widgets/CurrentTreatMentPlanWidget";
import RecentClinicalEventWidget from "../../components/widgets/RecentClinicalEventWidget";

export default () => {
  
  const [activatedLink, setActivatedLink] = useState({});
  const [selectedWidget,setSelectedWidget] = useState(null)

  const lineChartDummyData = [
    {
      name: "Jan 21",
      Benchmark: 4000,
      "All LOBs": 2400,
      amt: 2400,
    },
    {
      name: "Mar 21",
      Benchmark: 3000,
      "All LOBs": 1398,
      amt: 2210,
    },
    {
      name: "Jun 21",
      Benchmark: 2000,
      "All LOBs": 9800,
      amt: 2290,
    },
    {
      name: "Sep 21",
      Benchmark: 2780,
      "All LOBs": 3908,
      amt: 2000,
    },

    {
      name: "Dec 21",
      Benchmark: 2390,
      "All LOBs": 3800,
      amt: 2500,
    },
  ];

  const costBreakDownData = {
    labels: ["IP", "OP", "ER", "PCP"],
    label: "Risk",
    data: [25, 59, 150, 12],
  };

  const visitsBreakDownData = {
    labels: ["IP", "ER"],
    label: "Risk",
    data: [20, 59],
  };

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
    patientDetails:[
      {label:"Patient Id",value:12134},
      {label:"Gender",value:"Male"},
      {label:"Age",value:65},
      {label:"City",value:"Boston, MA"},
      {label:"Line of Business",value:"Medicare"},
      {label:"Product",value: "HMO"},
      {label:"Email",value:"121@abc.com"},
      {label:"Mobile",value:12364658484}
    ],
    patientChronicConditions:[
      {
        label:"primary",
        options:[
          {label:"Hypertension"}
        ]
      },
      {
        label:"secondary diagnosis",
        options:[
          {label:"Anxiety"},
          {label:"Obesity"}
        ]
      },
      {
        label:"Tertiary diagnosis",
        options:[
          {label:"Food Allergy"},
          {label:"Heart Disease"}
        ]
      }
    ],
    costAnalysis: {
      pastYearCost: "$124,214",
      avgYearCost: "$124,214",
      savingsOppurtunities: "$124,214",
    },

    comorbidities: ["Condition1", "Condition2", "Condition3"],
  };

  /////////////////////////////////////////dummy data///////////////////////////////////

  const PatientInfoWidget=()=>{
    return(
      <section className="col shadow-sm border border-light card pt-2 pb-2 patient_info-widget">
        <div className="row ml-2">
          <h2>{patient.name}</h2>
        </div>
        <div className="row">
          {patient.patientDetails.map((item,index)=>{
            return(
              <div className="col-6"> 
                <div className="d-flex flex-column m-1" key={index}>
                  <div className="font-weight-light">{item.label}</div>
                  <div className="font-weight-bold">{item.value}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  const ChronicConditionsWidgets=()=>{
    return(
      <section className="col shadow-sm border border-light card pt-2 pb-2 align-self-start">
        <div className="text-nowrap">chronic Conditions/ Comorbidities</div>
        {
          patient.patientChronicConditions.map((item,index)=>{
            return(
              <div className="row mt-1 mb-1" key={index}>
                  <div className="col-12 text-muted">{item.label}</div>
                  <div className="col-12 d-flex flex-md-row mt-1">
                    {
                      item.options.map((obj,key)=>{
                          return(
                            <div key={key} className="pt-1 bg-white-50 text-dark pb-1 pr-2 pl-2 mr-1 text-nowrap shadow-sm border border-light card">
                              {obj.label}
                            </div>
                          )
                      })
                    }
                  </div>
              </div>
            )
          })
        }
      </section>
    )
  }

  const ComingSoon=()=>{
    return(
      <div>
        <h1>Coming Soon....</h1>
      </div>
    )
  }
  

  const ClinicalRiskScoreWidget = () => {
    return (
        <div className="col">
          <LineChartWithReferenceLinesWidget
            classNames="app-card-m"
            chartName="Clinical Risk Score"
            data={lineChartDummyData}
            referenceLineX="Jun 21"
            dataKeyPv="All LOBs"
            dataKeyUv="Benchmark"
            colorPv="#8884d8"
            colorUv="#82ca9d"
            dataKeyXName="name"
          />
        </div>
    );
  };

  const CostBreakdownWidgetType=()=>{
    return (
      <div className="col-6">
        <DoughnutChartWidget
          classNames="app-card-m"
          chartName="Total Cost Breakdown by type"
          dataset={costBreakDownData}
        />
      </div>
    );
  }

  const TreatmentHistoryWidget = () => {
    return (
      <div className="col-6">
        <CurrentTreatMentPlanWidget
          heading="Treatment History"
          classNames="app-card-m"
        />
      </div>
    );
  };

  const VisitInformationBreakdown=()=>{
    return (
      <div className="col widget_aspectRatio">
        <DoughnutChartWidget
          classNames="app-card-m"
          chartName="Total Visit Information Breakdown IP & ER"
          dataset={visitsBreakDownData}
        />
      </div>
    );
  }

  const RecentClinicalEvents=()=>{
    return (
      <div className="col">
        <RecentClinicalEventWidget
          classNames="app-card-m"
          heading="Recent Clinical Events"
        />
      </div>
    );
  }


  const handleLinkSelect = (selectedLink) => {
    
    let widgetPicker={
      "ER Analysis":ClinicalRiskScoreWidget,
      "Pharmacy / Treatment":TreatmentHistoryWidget,
      "Cost Analysis":CostBreakdownWidgetType
    }

    setActivatedLink(selectedLink);
    const widget = widgetPicker[selectedLink.label];
    if(!widget){
      setSelectedWidget(ComingSoon)
      return
    }
    setSelectedWidget(widget)
  };

  return (
    <>
      <div className="main-content-container px-3">
        <div className="row page-header py-2">
          <div className="col-9">
            <div className="font-heading ml-2">PATIENT PROFILE</div>
            <div className="font-subheading ml-2">POPHEALTH DASHBOARD</div>
          </div>
        </div>
        <div className="row app-row">
          <PatientInfoWidget/>
          <ClinicalRiskScoreWidget/>
          <VisitInformationBreakdown/>
          <ChronicConditionsWidgets/>
          {/* <RecentClinicalEvents/> */}
        </div>
        <div className="row mt-3 ml-1">
          <div className="col-3 side_info-widget">
            <SideMemberInfoWidget activatedLink={activatedLink} handleLinkSelect={handleLinkSelect} />
          </div>
          <div className="col-9">
            <div className="row app-row">
              {selectedWidget}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
