
import React from "react";
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import paginationFactory from 'react-bootstrap-table2-paginator';

import KpiWidget  from "../../components/widgets/KpiWidget";
import LineChartWithReferenceLinesWidget from "../../components/widgets/LineChartWithReferenceLinesWidget";
import HorizontalBarChartWidget from "../../components/widgets/HorizontalBarChartWidget";
import RiskScoreWidget from "../../components/widgets/RiskScoreWidget";

import DataTable from '../../components/datatable/DataTable';

export default () => {

  const lineChartDummyData = [
    {
      name: 'Jan 21',
      "Benchmark": 4000,
      "All LOBs": 2400,
      amt: 2400,
    },
    {
      name: 'Mar 21',
      "Benchmark": 3000,
      "All LOBs": 1398,
      amt: 2210,
    },
    {
      name: 'Jun 21',
      "Benchmark": 2000,
      "All LOBs": 9800,
      amt: 2290,
    },
    {
      name: 'Sep 21',
      "Benchmark": 2780,
      "All LOBs": 3908,
      amt: 2000,
    },
  
    {
      name: 'Dec 21',
      "Benchmark": 2390,
      "All LOBs": 3800,
      amt: 2500,
    },
   
  ];

  const highRiskProfileByAgeBucketChartData = {
    labels: ['Above 70', '61-70', '51-60', 'Below 50'],
    data: [3000, 1009, 300, 500, 200]
  };

  const topProviderByMemberCountData = {
    labels: ['Provider Name1', 'Provider Name2', 'Provider Name3', 'Provider Name4', "Provider Name5"],
    data: [76, 49, 30, 10, 5]
  };

  const topPatientsByMemberCountData = {
    labels: ['Patient Name1', 'Patient Name2', 'Patient Name3', 'Patient Name4', "Patient Name5"],
    data: [120, 109, 30, 15, 2]
  };

 
  const topConditionsByMemberCountData = {
    labels: ['Condition1', 'Condition2', 'Condition3', 'Condition4', "Condition5"],
    data: [1009, 650, 300, 50, 20]
  };


  const patientRiskScoreData = {
    labels: ["High", "Medium", "Low"],
    label: 'Risk',
    data: [20, 59, 150],
  };

  const patientDetailsTableColumns = [
    {
      sort: false,
      "dataField": "index",
      "text": "#",

  },
    {
        sort: true,
        "dataField": "name",
        "text": "Patient Name",

    },
    {
        sort: true,
        "dataField": "ap",
        "text": "Attributed Provider",

    },
    {
        sort: true,
        "dataField": "org",
        "text": "Organization",

    },
    {
        sort: true,
        "dataField": "risk_score",
        "text": "Risk Score",

    },
    {
        sort: true,
        "dataField": "care_opps",
        "text": "Care Oppurtunies",

    },
];

const patientDetailsData = [
  {
      "index":1,
      "name": "patient name1",
      "ap": "attributed provider1",
      "org": "org name1",
      "risk_score": "66", 
      "care_opps": "2",

  },
  {
    "index":2,
    "name": "patient name2",
    "ap": "attributed provider2",
    "org": "org name2",
    "risk_score": "66", 
    "care_opps": "2",

},
{
  "index":1,
  "name": "patient name1",
  "ap": "attributed provider1",
  "org": "org name1",
  "risk_score": "66", 
  "care_opps": "2",

},
{
  "index":3,
  "name": "patient name3",
  "ap": "attributed provider3",
  "org": "org name3",
  "risk_score": "56", 
  "care_opps": "3",

},
{
  "index":4,
  "name": "patient name4",
  "ap": "attributed provider4",
  "org": "org name4",
  "risk_score": "56", 
  "care_opps": "5",

},
{
  "index":5,
  "name": "patient name5",
  "ap": "attributed provider5",
  "org": "org name5",
  "risk_score": "26", 
  "care_opps": "4",

}
]

  return (
    <>
      <div className="main-content-container px-3">
        <div className="row page-header py-2">
          <div className="col-9">
              <div className="font-heading ml-2">PATIENT ANALYSIS</div>
              <div className="font-subheading ml-2">POPHEALTH DASHBOARD</div>
          </div>
        </div>

        <div className="row">
            <div className="col" >
              <KpiWidget
                category="Total Patients"
                title="23,701"
                period="New as of 06/11/2021"
                percentage="1,200"
                icon={faChartLine}
                iconColor="shape-secondary"
              />
            </div>
            <div className="col">
              <KpiWidget
                category="Commercial Patients"
                title="12,332"
                period="New as of 06/11/2021"
                percentage="12%"
                icon={faChartLine}
                iconColor="shape-secondary"
              />
            </div>
            <div className="col">
              <KpiWidget
                category="Medicare Patients"
                title="12,000"
                period="New as of 06/11/2021"
                percentage="12%"
                icon={faChartLine}
                iconColor="shape-secondary"
              />
            </div>
            <div className="col">
              <KpiWidget
                category="Recent Discharges"
                title="23"
                period="Past 14 days"
                percentage="12%"
                icon={faChartLine}
                iconColor="shape-secondary"
              />
            </div>
            <div className="col">
              <KpiWidget
                category="Avg. Length of Stay"
                title="120"
                period="New as of 06/11/2021"
                percentage="12%"
                icon={faChartLine}
                iconColor="shape-secondary"
              />
            </div>
          </div>

          <div className="row app-row">
            <div className="col-4">
              <LineChartWithReferenceLinesWidget  
                chartName="Chronic Hot Spotter Trend"
                data={lineChartDummyData}
                referenceLineX="Jun 21"  
                dataKeyPv="All LOBs"
                dataKeyUv="Benchmark" 
                colorPv="#8884d8"
                colorUv="#82ca9d"
                dataKeyXName="name" />
            </div>
            <div className="col-4">
              <RiskScoreWidget  
                      chartName="Paitent Risk Score"
                      dataset={patientRiskScoreData}
                    />
            </div>
            <div className="col-4">
              <HorizontalBarChartWidget  
                    chartName="High Risk Profile by Age Bucket"
                    dataset={highRiskProfileByAgeBucketChartData}
                    yAxesLabel=""
                    xAxesLabel="Patient Counts" />
            </div>
          </div>

          <div className="row app-row">
            <div className="col-4">
              <HorizontalBarChartWidget  
                chartName="Top Providers by Member Count"
                dataset={topProviderByMemberCountData}
                yAxesLabel=""
                xAxesLabel="Member Count" />
            </div>
            <div className="col-4">
              <HorizontalBarChartWidget  
                chartName="Top Conditions by Member Count"
                dataset={topConditionsByMemberCountData}
                yAxesLabel=""
                xAxesLabel="Member Count" />
            </div>
            <div className="col-4">
              <HorizontalBarChartWidget  
                chartName="Top Patients by Care Oppurtunity Score"
                dataset={topPatientsByMemberCountData}
                yAxesLabel=""
                xAxesLabel="Member Count" />
            </div>

          </div>

          <div className="row app-row">
            <div lg="12" md="12" sm="12" className="mb-4 col">
                <div className="h-100 card app-card">
                    <div className="pt-0 card-body">
                        <div className="border-bottom card-header">
                            <h6 className="m-0">Patient Details</h6>
                        </div>
                        <div className="dataGrid p-2">
                            <DataTable
                                    columns={patientDetailsTableColumns}
                                    data={patientDetailsData}
                                    keyField='PERSON_ID'
                                    pagination={paginationFactory({
                                        sizePerPage: 10,
                                    })}
                                    search="true"
                                />
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  );
};
