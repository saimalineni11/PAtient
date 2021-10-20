import ApiDataService from "../../services/ApiDataService";

import {
  formatToAbbreviateNumber,
  formatToCurrency,
  formatToWholeNumber,
} from "../../utils/FormatNumber.js";

class SummaryService {
  loadTotalPatientsKpiData(callback) {
    ApiDataService.getTotalPatientsKpiData({
      reportingPeriod: "201901:201906",
    })
      .then((reponse) => {
        console.log(reponse);
        let resData = reponse.data.data;

        let obj = {
          title: "Total Patients",
          value: formatToAbbreviateNumber(
            resData.totalPatients[0].totalPatients
          ),
          period: "New as of " + resData.updated_date,
          percentage: resData.percentageChange,
        };

        callback(obj);
      })
      .catch(function(error) {
        if (error.response) {
          if (error.response.status === 404) {
            callback(`\u2014`);
          }
        }
      });

    return this;
  }

  loadPmPmKpiData(callback) {
    ApiDataService.getPmPmKpiData({
      reportingPeriod: "201901:201906",
    })
      .then((reponse) => {
        console.log(reponse);
        let resData = reponse.data.data;

        let obj = {
          title: "PMPM",
          value: formatToCurrency(resData.totalPmPmCosts[0].totalPmPmCosts),
          period: "New as of " + resData.updated_date,
          percentage: resData.percentageChange,
        };

        callback(obj);
      })
      .catch(function(error) {
        if (error.response) {
          if (error.response.status === 404) {
            callback(`\u2014`);
          }
        }
      });

    return this;
  }

  loadTotalSavingsKpiData(callback) {
    ApiDataService.getTotalSavingsKpiData({
      reportingPeriod: "201901:201906",
    })
      .then((reponse) => {
        console.log(reponse);
        let resData = reponse.data.data;

        let obj = {
          title: "Total Savings",
          value: formatToCurrency(resData.totalSavings[0].totalSavings),
          period: "New as of " + resData.updated_date,
          percentage: resData.percentageChange,
        };

        callback(obj);
      })
      .catch(function(error) {
        if (error.response) {
          if (error.response.status === 404) {
            callback(`\u2014`);
          }
        }
      });

    return this;
  }

  loadRecentDischargesKpiData(callback) {
    ApiDataService.getRecentDischargesKpiData({
      reportingPeriod: "201901:201906",
    })
      .then((reponse) => {
        console.log(reponse);
        let resData = reponse.data.data;

        let obj = {
          title: "Recent Discharges",
          value: formatToAbbreviateNumber(
            resData.recentDischarges[0].recentDischarges
          ),
          period: resData.updated_date,
          percentage: resData.percentageChange,
        };

        callback(obj);
      })
      .catch(function(error) {
        if (error.response) {
          if (error.response.status === 404) {
            callback(`\u2014`);
          }
        }
      });

    return this;
  }

  loadAvgLengthOfStayKpiData(callback) {
    ApiDataService.getAvgLengthOfStayKpiData({
      reportingPeriod: "201901:201906",
    })
      .then((reponse) => {
        console.log(reponse);
        let resData = reponse.data.data;

        let obj = {
          title: "Avg. Length of Stay",
          value: formatToAbbreviateNumber(
            resData.avgLengthOfStay[0].avgLengthOfStay
          ),
          period: "New as of " + resData.updated_date,
          percentage: resData.percentageChange,
        };

        callback(obj);
      })
      .catch(function(error) {
        if (error.response) {
          if (error.response.status === 404) {
            callback(`\u2014`);
          }
        }
      });

    return this;
  }

  loadTopFiveTherapeuticClassBySpendData(callback) {
    ApiDataService.getTopFiveTherapeuticClassBySpendData({
      reportingPeriod: "201901:201906",
    })
      .then((reponse) => {
        console.log(reponse);
        let resData = reponse.data.data.topFiveTherapeuticClassBySpend;

        let topFiveTherapeuticClassNames = [];
        let topFiveTherapeuticClassSpends = [];

        resData.map((obj) => {
          topFiveTherapeuticClassNames.push(obj["THERAPEUTIC_CLASS"]);
          topFiveTherapeuticClassSpends.push(obj["RX_COST"]);
        });

        const horizontalBarChartData = {
          labels: topFiveTherapeuticClassNames,
          data: topFiveTherapeuticClassSpends,
        };

        console.log(horizontalBarChartData);

        callback(horizontalBarChartData);
      })
      .catch(function(error) {
        if (error.response) {
          if (error.response.status === 404) {
            callback(`\u2014`);
          }
        }
      });

    return this;
  }

  loadPatientRiskScoreData(callback) {

    ApiDataService.getPatientRiskScoreData({
      reportingPeriod: "201901:201911",
    })
      .then((reponse) => {
        console.log(reponse);
        let resData = reponse.data.data.patientRiskScore;

        const patientRiskScoreData = {
          labels: ["Low", "Medium", "High"],
          label: "Risk",
          data: [],
        };

        resData.map((obj) => {
          
          if (obj["riskBucket"] === "LOW") {
            patientRiskScoreData.data[0] = obj["patientCount"];
          }

          if (obj["riskBucket"] === "MEDIUM") {
            patientRiskScoreData.data[1] = obj["patientCount"];
          }

          if (obj["riskBucket"] === "HIGH") {
            patientRiskScoreData.data[2] = obj["patientCount"];
          }
        });

        console.log(patientRiskScoreData);

        callback(patientRiskScoreData);
      })
      .catch(function(error) {
        if (error.response) {
          if (error.response.status === 404) {
            callback(`\u2014`);
          }
        }
      });

    return this;
  }
}

export default SummaryService;
