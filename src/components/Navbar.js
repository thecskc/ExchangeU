import React from "react";
import { Link, Router } from "@reach/router";

import "./Navbar.css";
import Logo from "../assets/logo.jpg";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a className="active">Home</a>
       
        <img src={Logo} alt="Company logo" />
      </div>
    );
  }
}

export default Navbar;
