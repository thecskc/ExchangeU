import React from "react";

import "./CoachItem.css";
import profileImage from "../assets/user.png";

export default class CoachItem extends React.Component {
  constructor(props) {
    super();

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {}

  render() {
    return (
      <div className="card">
        <img src={profileImage} style={{ margin: 16 }} alt="Avatar" />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Software Engineer</p>
          <button className="button" onClick={this.handleClick}>
            <span>Book now </span>
          </button>
        </div>
      </div>
    );
  }
}
