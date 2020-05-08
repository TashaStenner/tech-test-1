import React from "react";
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Containers/Weather";
import Navbar from "react-bootstrap/Navbar";
import { Router, Link } from "@reach/router"
import Nav from "react-bootstrap/Nav";
import Question from "./Containers/Question";
import FantasyFootball from "./Containers/FantasyFootball";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Tech Test</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="weather">Weather</Link> 
          <Link to="fantasy-football">Fantasy Football</Link>
          <Link to="question">Question</Link>
        </Nav>
      </Navbar>
      <br />
      {/* <FantasyFootball /> */}
      {/* <Question/> */}
      {/* <Weather/> */}
    </div>
  );
}

export default App;
