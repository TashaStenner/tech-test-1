import React from "react";
import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import Question from "../Question";
import FantasyFootball from "../FantasyFootball";
import Weather from "../Weather";

const Routes = () => {
  return (
    <Router>
    <Weather path="weather" />
    <FantasyFootball path="fantasy-football" />
    <Question path="question" />
  </Router>
  );
};

export default Routes;
