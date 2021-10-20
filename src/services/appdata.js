
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
    labels: ["IP", "OP", "ER", "PCP", "Pharma"],
    label: 'Risk',
    data: [20, 59, 150,23,45],
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