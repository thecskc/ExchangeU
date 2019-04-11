import React, {Component} from "react";
import {Link, Router} from "@reach/router";

import Coach from "./components/Coach";
import Form from "./components/FormContainer";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import MainCoach from "./components/MainCoach"

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>

                <Navbar/>

                <Router>
                    <Landing path="/"/>
                    <Coach path="/coaches"/>
                    <Form path="coaches/appointment-form/:coachId"/>
                </Router>
            </div>
        );
    }
}

export default App;
