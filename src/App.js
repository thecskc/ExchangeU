import React, { Component } from "react";
import { Link, Router } from "@reach/router";

import Coach from "./components/Coach";
import Form from "./components/FormContainer";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Coach path="/" />
          <Form path="/appointment-form/:coachId" />
        </Router>
      </div>
    );
  }
}

export default App;
