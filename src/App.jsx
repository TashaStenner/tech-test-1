import React from "react";
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Containers/Weather";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Question from "./Containers/Question";
import FantasyFootball from "./Containers/FantasyFootball";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Tech Test</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Weather</Nav.Link>
          <Nav.Link href="#features">Questionnaire</Nav.Link>
          <Nav.Link href="#pricing">Fantasy Football</Nav.Link>
        </Nav>
      </Navbar>
      <br/>
     {/* <Question/> */}
     {/* <Weather/> */}
    </div>
  );
}

export default App;
