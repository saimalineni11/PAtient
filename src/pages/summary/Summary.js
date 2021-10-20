import React, { useState, useEffect } from "react";

import "./summary.css";

import KpiWidget from "../../components/widgets/KpiWidget";
import LineChartWithReferenceLinesWidget from "../../components/widgets/LineChartWithReferenceLinesWidget";
import HorizontalBarChartWidget from "../../components/widgets/HorizontalBarChartWidget";
import RiskScoreWidget from "../../components/widgets/RiskScoreWidget";
import DisplayFiltersWidget from "../../components/widgets/DisplayFiltersWidget";
import PageHeaderWidget from "../../components/widgets/PageHeaderWidget";

import SummaryService from "../../services/summary/SummaryService";

export default () => {
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
      "Dash-Benchmark": 2000,
      "Dash-All LOBs": 9800,
      amt: 2290,
    },
    {
      name: "Sep 21",
      "Dash-Benchmark": 2780,
      "Dash-All LOBs": 3908,
      amt: 2000,
    },

    {
      name: "Dec 21",
      "Dash-Benchmark": 2390,
      "Dash-All LOBs": 3800,
      amt: 2500,
    },
  ];

  const horizontalBarChartCareOppsData = {
    labels: [
      "Care1",
      "Care2",
      "Care3",
      "Care4",
      "Care5",
      "Care6",
      "Care7",
      "Care8",
      "Care9",
      "Care10",
    ],
    data: [12, 19, 3, 5, 2, 3, 12, 34, 56, 7],
  };

  const initialPatientRiskScoreData = {
    labels: [],
    label: "Risk",
    data: [],
  };

  const initialHorizontalBarChartData = {};

  const initialTopSavingsOpportunitiesData = {
    labels: [
      "Disease Onset",
      "Redirection and Utilization",
      "Care Gap Management",
    ],
    label: "Risk",
    data: [60, 25, 15],
  };

  const [patientsKpiData, setPatientsKpiData] = useState({});
  const [pmpmKpiData, setPmPmKpiData] = useState({});
  const [totalSavingsKpiData, setTotalSavingsKpiData] = useState({});
  const [recentDischargesKpiData, setRecentDischargesKpiData] = useState({});
  const [avgLengthOfStayKpiData, setAvgLengthOfStayKpiData] = useState({});
  const [
    topFiveTherapeuticClassBySpendData,
    setTopFiveTherapeuticClassBySpendData,
  ] = useState(initialHorizontalBarChartData);
  const [patientRiskScoreData, setPatientRiskScoreData] = useState(
    initialPatientRiskScoreData
  );
  const [
    topSavingsOpportunitiesData,
    setTopSavingsOpportunitiesData,
  ] = useState(initialTopSavingsOpportunitiesData);

  useEffect(() => {
    fetchKpisData();
  }, []);

  const fetchKpisData = () => {
    const summaryService = new SummaryService();
    summaryService
      .loadTotalPatientsKpiData(setPatientsKpiData)
      .loadPmPmKpiData(setPmPmKpiData)
      .loadTotalSavingsKpiData(setTotalSavingsKpiData)
      .loadRecentDischargesKpiData(setRecentDischargesKpiData)
      .loadAvgLengthOfStayKpiData(setAvgLengthOfStayKpiData)
      .loadTopFiveTherapeuticClassBySpendData(
        setTopFiveTherapeuticClassBySpendData
      )
      .loadPatientRiskScoreData(setPatientRiskScoreData);
  };

  return (
    <>
      <div className="main-content-container px-3">
        <PageHeaderWidget pageHeading="SUMMARY" />

        <div className="row">
          <div className="col">
            <DisplayFiltersWidget displaySensitiveSwtichBtn={true} />
          </div>
        </div>

        <div className="row app-row">
          <div className="col">
            <KpiWidget
              title={patientsKpiData.title}
              value={patientsKpiData.value}
              period={patientsKpiData.period}
              percentage={patientsKpiData.percentage}
            />
          </div>
          <div className="col">
            <KpiWidget
              title={pmpmKpiData.title}
              value={pmpmKpiData.value}
              period={pmpmKpiData.period}
              percentage={pmpmKpiData.percentage}
            />
          </div>
          <div className="col">
            <KpiWidget
              title={totalSavingsKpiData.title}
              value={totalSavingsKpiData.value}
              period={totalSavingsKpiData.period}
              percentage={totalSavingsKpiData.percentage}
            />
          </div>
          <div className="col">
            <KpiWidget
              title={recentDischargesKpiData.title}
              value={recentDischargesKpiData.value}
              period={recentDischargesKpiData.period}
              percentage={recentDischargesKpiData.percentage}
            />
          </div>
          <div className="col">
            <KpiWidget
              title={avgLengthOfStayKpiData.title}
              value={avgLengthOfStayKpiData.value}
              period={avgLengthOfStayKpiData.period}
              percentage={avgLengthOfStayKpiData.percentage}
            />
          </div>
        </div>

        <div className="row app-row">
          <div className="col-4">
            <LineChartWithReferenceLinesWidget
              chartName="Care Opportunity Trend"
              data={lineChartDummyData}
              referenceLineX="Jun 21"
              dataKeyPv="All LOBs"
              dataKeyUv="Benchmark"
              colorPv="#0193EB"
              colorUv="#067B63"
              dataKeyXName="name"
            />
          </div>
          <div className="col-4">
            <LineChartWithReferenceLinesWidget
              chartName="PMPM Trend"
              data={lineChartDummyData}
              referenceLineX="Jun 21"
              dataKeyPv="All LOBs"
              dataKeyUv="Benchmark"
              colorPv="#0193EB"
              colorUv="#067B63"
              dataKeyXName="name"
            />
          </div>
          <div className="col-4">
            <LineChartWithReferenceLinesWidget
              chartName="IP Admissions"
              data={lineChartDummyData}
              referenceLineX="Jun 21"
              dataKeyPv="All LOBs"
              dataKeyUv="Benchmark"
              colorPv="#0193EB"
              colorUv="#067B63"
              dataKeyXName="name"
            />
          </div>
        </div>

        <div className="row app-row">
          <div className="col-md-4">
            <HorizontalBarChartWidget
              chartName="Top Care Opportunities"
              dataset={horizontalBarChartCareOppsData}
              yAxesLabel=""
              xAxesLabel="Patient Count"
              colors={[
                "#067B63",
                "#0193EB",
                "#054558",
                "#AFD72B",
                "#3B1CFF",
                "#FF9C7C",
                "#FFE900",
                "#067B63",
                "#0193EB",
                "#054558",
              ]}
            />
          </div>
          <div className="col-md-8">
            <div className="row app-row">
              <div className="col-md-6">
                <RiskScoreWidget
                  chartName="Top Savings Opportunities"
                  dataset={topSavingsOpportunitiesData}
                />
              </div>
              <div className="col-md-6" >
                <LineChartWithReferenceLinesWidget
                  chartName="ER Redirect"
                  data={lineChartDummyData}
                  referenceLineX="Jun 21"
                  dataKeyPv="All LOBs"
                  dataKeyUv="Benchmark"
                  colorPv="#0193EB"
                  colorUv="#067B63"
                  dataKeyXName="name"
                />
              </div>
            </div>
            <div className="row app-row">
              <div className="col-md-6">
                <HorizontalBarChartWidget
                  chartName="Top 5 Therapeutic Class by Spend"
                  dataset={topFiveTherapeuticClassBySpendData}
                  yAxesLabel=""
                  xAxesLabel="Spend"
                  colors={[
                    "#067B63",
                    "#0193EB",
                    "#054558",
                    "#AFD72B",
                    "#3B1CFF",
                  ]}
                />
              </div>
              <div className="col-md-6">
                <RiskScoreWidget
                  chartName="Patient Risk Score"
                  dataset={patientRiskScoreData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
