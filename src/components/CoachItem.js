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
  marginBottom: 24,
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
    let divElem;
    let btnContainer;

    if (this.props.isa) {
      divElem = <div style={fetaureTagStyles}> Income Sharing Agreement ☆</div>;
      btnContainer = (
        <div>
          <Link to={`appointment-form/${this.props.id}`}>
            <button className="button" onClick={this.handleClick}>
              <span>Book session </span>
            </button>
          </Link>
          <a href={`https://forms.gle/E61JauWqFGAwaAiSA`}>
            <button className="button" onClick={this.handleClick}>
              <span>Apply for ISA </span>
            </button>
          </a>
        </div>
      );
    } else {
      divElem = <div />;
      btnContainer = (
        <Link to={`appointment-form/${this.props.id}`}>
          <button className="button" onClick={this.handleClick}>
            <span>Book session </span>
          </button>
        </Link>
      );
    }

    return (
      <div className="card" style={{ position: "relative" }}>
        {divElem}
        <img
          src={images[`${this.props.img}.png`]}
          style={{ margin: 16, height: 64, width: 64, paddingTop: 16 }}
          alt={this.props.img}
        />

        <h3>
          <b>{this.props.firstName}</b>
        </h3>
        {/*<p style={{marginTop: 16}}>Software Engineer</p>*/}
        <h5>{this.props.company}</h5>
        <h5> {`${this.props.experience} year(s) of experience`}</h5>
        <h4 style={{ marginBottom: 25 }}>{`Charges ${
          this.props.ratePerHour
        }$ per hour`}</h4>

        <p className="bio">{this.props.bio}</p>
        {btnContainer}
      </div>
    );
  }
}
