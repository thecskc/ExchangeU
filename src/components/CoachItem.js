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
            <b>{this.props.name}</b>
          </h4>
          <p>Software Engineer</p>
          <p>{this.props.company}</p>
          <button className="button" onClick={this.handleClick}>
            <span>Book now </span>
          </button>
        </div>
      </div>
    );
  }
}
