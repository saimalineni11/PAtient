import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import AppHeader from "../components/layout/MainHeader"
import Sidebar from "../components/sidebar/Sidebar";
import Summary from "./summary/Summary";
import PatientAnalysis from "./patient-analysis/PatientAnalysis";
import PatientProfile from "./patient-profile/PatientProfile";
import CareOpportunities from "./care-oppurtunities/CareOpportunities";

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [menuState, setMenuState] = useState("");
  const [dashboardPadding, setDashboardPadding] = useState("");

  const tabClickHandler = (tabNo) => {
    setSelectedTab(tabNo);
    sessionStorage.setItem("selectedTabNo" , JSON.stringify(tabNo));
  };

  const openMenuContainer = () => {
    if (menuState === "") {
      setMenuState("menu-active");
      setDashboardPadding("dashboardShift");
    }
    else {
      setMenuState("");
      setDashboardPadding("")
    }
  }

  useEffect(() => {
    const selectedTabNo = JSON.parse(sessionStorage.getItem("selectedTabNo"));
    if(selectedTabNo){
      setSelectedTab(selectedTabNo);
    } else{
      setSelectedTab(1);
    }

  }, []);


  return (
    <Route {...rest} render={props => (
      <>
       <div className="container-fluid pl-0">
        <Sidebar  
            menuState={menuState}  
            openMenuContainer={openMenuContainer} 
            selectedTab={selectedTab}
            tabClickHandler={tabClickHandler}
        />

        <div className="row">
          <div className="col p-0">
            <AppHeader />
          </div>
        </div>

        <div className={`dashboard-body ${dashboardPadding} h-100`}>
            <Component {...props} />
        </div>

      </div>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    {/* pages */}
    <RouteWithSidebar exact path={"/"} component={Summary} />
    <RouteWithSidebar exact path={Routes.Summary.path} component={Summary} />
    <RouteWithSidebar exact path={Routes.PatientAnalysis.path} component={PatientAnalysis} />
    <RouteWithSidebar exact path={Routes.PatientProfile.path} component={PatientProfile} />
    <RouteWithSidebar exact path={Routes.CareOpportunities.path} component={CareOpportunities} />
    
    {/* <Redirect to={Routes.NotFound.path} /> */}
  </Switch>
);
