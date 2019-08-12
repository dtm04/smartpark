import React, { Component, useState } from "react";
import { Button, Form, Col, Row, Container, Alert } from "react-bootstrap";
import "./ShowLot";
import { ratingContract, account0 } from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingLots: [
        { manager: "0x43284414d6f3ba61407e3055171402b9e38992ee", numSpots: 20 },
      ],  
      showAlert: false,
    };
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
