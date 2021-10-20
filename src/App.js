import React from "react";
import { HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/dashboard.css";

import "./App.css";

import HomePage from "./pages/HomePage"

export default () => (
  <HashRouter>
      <HomePage/>
  </HashRouter>
);
