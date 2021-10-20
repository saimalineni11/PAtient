import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Nav, NavItem, NavLink } from "shards-react";
import { Link } from "react-router-dom";

function Copyright() {
  return (
  <div variant="body2" style={{float:'left',color:'#ffffff'}}>
    {'Copyright © '}
    <span>
      {new Date().getFullYear()} Deloitte Development LLC. All Right Reserved.
    </span>
  </div>
);
}

const MainFooter = ({ contained}) => (
  <footer className="main-footer">
    <nav className="navbar fixed-bottom app-footer">
      <Copyright/>
    </nav>
  </footer>
);

export default MainFooter;
