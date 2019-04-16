import React, {Component} from "react";
import {Link, Router} from "@reach/router";

import Coach from "./components/Coach";
import Form from "./components/FormContainer";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import MainCoach from "./components/MainCoach"
import Pricing from "./components/Pricing"

import Footer from "./components/Footer"
class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{width:"100%",height:"100%"}}>

                <Navbar/>

                <Router>
                    <Landing path="/"/>
                    <Coach path="/coaches"/>
                    <Pricing path="/pricing"/>
                    <Form path="coaches/appointment-form/:coachId"/>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
