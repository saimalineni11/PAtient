import axios from "axios";

const DBTYPE = "bigquery";
const SUMMARY_KPI_URL = "summary/kpis";

// const API_URL = `http://34.74.172.63:9001/v1/pop-health/apis/${DBTYPE}`
const API_URL = `http://localhost:8000/v1/pop-health/apis/${DBTYPE}`;

class ApiDataService {
  getTotalPatientsKpiData(filters) {
    return axios.post(
      `${API_URL}/${SUMMARY_KPI_URL}/totalPatientCounts`,
      filters,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  getPmPmKpiData(filters) {
    return axios.post(`${API_URL}/${SUMMARY_KPI_URL}/totalPmPmCosts`, filters, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getTotalSavingsKpiData(filters) {
    return axios.post(`${API_URL}/${SUMMARY_KPI_URL}/totalSavings`, filters, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getRecentDischargesKpiData(filters) {
    return axios.post(
      `${API_URL}/${SUMMARY_KPI_URL}/recentDischarges`,
      filters,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  getAvgLengthOfStayKpiData(filters) {
    return axios.post(
      `${API_URL}/${SUMMARY_KPI_URL}/avgLengthOfStay`,
      filters,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  getTopFiveTherapeuticClassBySpendData(filters) {
    return axios.post(
      `${API_URL}/${SUMMARY_KPI_URL}/topFiveTherapeuticClassBySpend`,
      filters,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  getPatientRiskScoreData(filters) {
    return axios.post(
      `${API_URL}/${SUMMARY_KPI_URL}/patientRiskScore`,
      filters,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export default new ApiDataService();
