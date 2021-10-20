import React from "react";

import "./Sidebar.css";

const SideBarMenuItem = ({link, title, iconName, itemName, selectedTab, tabIndex,  tabClickHandler}) => {
  return (
      <a onClick={() => tabClickHandler(tabIndex)} href={link}>
          <li className={"nav-item pi-tab d-flex " + (selectedTab == tabIndex ? 'active' : '')}>
            <i className="material-icons" title={title}>{iconName}</i>
            <label>{itemName}</label>
          </li>   
      </a>
  )
}

const SideBar = ( { menuState, openMenuContainer, selectedTab, tabClickHandler }) => {
  return (
    <>
      <div className="d-flex h-100 w-100 pr-2">
        <div className="menu-container">
          <div className={`main-menu ${menuState}`} id="side-menu">
            <ul className="list-unstyled">

            <SideBarMenuItem 
              tabIndex={1}
              link="#/summary" 
              title="Summary" 
              iconName="vertical_split" 
              itemName="Summary" 
              selectedTab={selectedTab}
              tabClickHandler={tabClickHandler}
            />

            <SideBarMenuItem 
              tabIndex={2}
              link="#/patient-analysis" 
              title="Patient Analysis" 
              iconName="manage_accounts" 
              itemName="Patient Analysis" 
              selectedTab={selectedTab}
              tabClickHandler={tabClickHandler}
            />

            <SideBarMenuItem 
              tabIndex={3}
              link="#/patient-profile" 
              title="Patient Profile" 
              iconName="person" 
              itemName="Patient Profile" 
              selectedTab={selectedTab}
              tabClickHandler={tabClickHandler}
            />

            <SideBarMenuItem 
              tabIndex={4}
              link="#/care-opportunities" 
              title="Care Opportunities" 
              iconName="health_and_safety" 
              itemName="Care Opportunities" 
              selectedTab={selectedTab}
              tabClickHandler={tabClickHandler}
            />
             

             
             
             
{/*             
              <a href="#/patient-analysis">
                <li className={"nav-item pi-tab mt-0 d-flex " + (selectedTab == 2 ? 'active' : '')}>
                  <i className="material-icons" onClick={() => tabClickHandler(2)} title="Patient Profile">person</i>
                  <label onClick={() => tabClickHandler(2)}>Patient Analysis</label>
                </li>
              </a> */}

            </ul>

            <ul className="list-unstyled">

              <SideBarMenuItem 
                tabIndex={10}
                link="#/help" 
                title="Help" 
                iconName="help_outline" 
                itemName="Help" 
                selectedTab={selectedTab}
                tabClickHandler={tabClickHandler}
              />

              <SideBarMenuItem 
                tabIndex={11}
                link="#/settings" 
                title="Settings" 
                iconName="settings" 
                itemName="Settings" 
                selectedTab={selectedTab}
                tabClickHandler={tabClickHandler}
              />
            </ul>
          </div>
          <div className={"open-menu p-1 mt-5 "} onClick={openMenuContainer}>
            <div className="dots">.</div>
            <div className="dots">.</div>
            <div className="dots">.</div>
            <div className="dots">.</div>
            <div className="dots">.</div>
            <div className="dots">.</div>
          </div>
        </div>
      </div>
    </>
  );

};





export default SideBar;
