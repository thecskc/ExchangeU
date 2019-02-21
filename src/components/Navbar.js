import React from "react";

import "./Navbar.css";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>>Home</li>
            <li>News</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
