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
      <div class="topnav" id="myTopnav">
        <a class="active">Home</a>
       
        <img src={Logo} alt="Company logo" />
      </div>
    );
  }
}

export default Navbar;
