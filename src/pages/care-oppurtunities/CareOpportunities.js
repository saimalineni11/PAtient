
import React from "react";
import { Col, Row } from 'react-bootstrap';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Badge from 'react-bootstrap/Badge'

import KpiWidget  from "../../components/widgets/KpiWidget";
import LineChartWithReferenceLinesWidget from "../../components/widgets/LineChartWithReferenceLinesWidget";
import DataTableWidget from "../../components/widgets/DataTableWidget";
import DoughnutChartWidget from "../../components/widgets/DoughnutChartWidget";

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

  const careOpportunitiesByProviderData = {
    labels: ["Open", "Close", "Total"],
    label: '',
    data: [25, 20, 150],
  };

  const patientDetailsTableColumns = [
    {
        sort: true,
        "dataField": "name",
        "text": "Member Name",

    },
    {
        sort: true,
        "dataField": "openOpportunities",
        "text": "Open Opportunities",

    },
    {
        sort: true,
        "dataField": "service_date",
        "text": "Last Service Date",

    },
    {
        sort: true,
        "dataField": "clinical_due_date",
        "text": "Next Clinical Due Date",

    },
    {
        sort: true,
        "dataField": "status",
        "text": "Status",

    },
];

const patientDetailsData = [
  {
      "name": "member name1",
      "openOpportunities": "2",
      "service_date": "05/13",
      "clinical_due_date": "06/13", 
      "status": "status",

  },
  {
    "name": "member name2",
    "openOpportunities": "5",
    "service_date": "05/13",
    "clinical_due_date": "06/13", 
    "status": "status",

},
{
  "name": "member name3",
  "openOpportunities": "3",
  "service_date": "05/13",
  "clinical_due_date": "06/13", 
  "status": "status",

},
]

const totalVisitsBreakDownColumns = [
//   {
//     sort: false,
//     "dataField": "index",
//     "text": "#",

// },
  {
      sort: true,
      "dataField": "visitType",
      "text": "Visit Type",

  },
  {
      sort: true,
      "dataField": "noOfVisits",
      "text": "# Visits",

  },
  {
      sort: true,
      "dataField": "lastVisit",
      "text": "Last Visit",

  }]

  const totalVisitsBreakDownData = [
    {
        "index":1,
        "visitType": "IP",
        "noOfVisits": "123",
        "lastVisit": "05/13",
  
    },
    {
      "index":2,
      "visitType": "OP",
      "noOfVisits": "12",
      "lastVisit": "06/13",

  },
  {
    "index":3,
    "visitType": "Pharma",
    "noOfVisits": "322",
    "lastVisit": "05/13",

},
  ]


  return (
    <>
      <div className="main-content-container px-3">
        <div className="row page-header py-2">
          <div className="col-9">
              <div className="font-heading ml-2">CARE OPPORTUNITIES</div>
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
                category="PMPM"
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
                classNames="app-card-m"
                chartName="Care Opportunity Trend"
                data={lineChartDummyData}
                referenceLineX="Jun 21"  
                dataKeyPv="All LOBs"
                dataKeyUv="Benchmark" 
                colorPv="#8884d8"
                colorUv="#82ca9d"
                dataKeyXName="name" />
            </div>
            <div className="col-4">
                <DataTableWidget
                    heading="Total Visits Breakdown"
                    classNames="app-card-m"
                    columns={totalVisitsBreakDownColumns}
                    data={totalVisitsBreakDownData}
                    keyField=''
                    sizePerPage='2'
                />
            </div>
            <div className="col-4">
              <DoughnutChartWidget  
                      classNames="app-card-m"  
                      chartName="Care Opportunities  by Provider"
                      dataset={careOpportunitiesByProviderData}
                    />
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
