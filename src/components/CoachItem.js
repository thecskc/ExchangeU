import React from "react";
import { Link } from "@reach/router";

import "./CoachItem.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/", false, /\.(png|jpe?g|svg)$/)
);

const fetaureTagStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  marginRight: 12,
  marginTop: 12,
  background: "purple",
  color: "white",
  padding: 8
};

export default class CoachItem extends React.Component {
  constructor(props) {
    super();

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return (
      <div className="card" style={{ position: "relative" }}>
        <div style={fetaureTagStyles}>
          <span>Featured ☆</span>
        </div>
        <img
          src={images[`${this.props.img}.png`]}
          style={{ margin: 16 }}
          alt={this.props.img}
        />
        <div className="container">
          <h4>
            <b>{this.props.name}</b>
          </h4>
          <p style={{ marginTop: 16 }}>Software Engineer</p>
          <p>{this.props.company}</p>
          <p> {`Experience of ${this.props.experience} years`}</p>
          <p style={{ marginBottom: 16 }}>{`Charges ${
            this.props.rate
          }$ per hour`}</p>
          <Link to={`appointment-form/${this.props.id}`}>
            <button className="button" onClick={this.handleClick}>
              <span>Book now </span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
