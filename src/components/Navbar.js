import React from "react";
import {Link, Router} from "@reach/router";

import "./Navbar.css";
import Logo from "../assets/logo.jpg";
import Landing from "./Landing";
import Coach from "./Coach";
import Pricing from "./Pricing";
import Form from "./FormContainer";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="topnav" id="myTopnav">

                <Link to="/">Home</Link>
                <Link to="/coaches">Coaches</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/hiring">Hire With Exchange</Link>
                <img src={Logo} alt="Company logo"/>
            </div>
        );
    }

}

export default Navbar;
