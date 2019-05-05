import React from "react";
import { Link } from "@reach/router";
import Popover from 'react-simple-popover';

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

    this.state = {
      open : false
    };


  }

  handleClick(e) {
     this.setState({open: !this.state.open});
   }

   handleClose(e) {
     this.setState({open: false});
   }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    let divElem;
    let btnContainer;

    if (this.props.isa) {
      divElem = (
        <dfn
          data-info="This coach is open to Income Sharing Agreements. Apply for ISA to get
      proposals from coaches. Each proposal has information on the duration of the training and the percentage of your first year salary they would take
      if and only when you get a job. You can then accept or decline the proposal!"
          style={fetaureTagStyles}
        >
          {" "}
          Income Sharing Agreement
        </dfn>
      );
      btnContainer = (
        <div className="btn-container">
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
        <div className="btn-container">
          <Link to={`appointment-form/${this.props.id}`}>
            <button className="button" onClick={this.handleClick}>
              <span>Book session </span>
            </button>
          </Link>
        </div>
      );
    }

    return (

      <div


        className="card" style={{ position: "relative" }}
      >
        {divElem}
        <img
          src={images[`${this.props.img}.svg`]}
          style={{ margin: 16, height: 72, width: 72, paddingTop: 16 }}
          alt={this.props.img}
        />

        <h3>
          <b>{this.props.firstName}</b>
        </h3>
        {/*<p style={{marginTop: 16}}>Software Engineer</p>*/}
        <h5>{this.props.location}</h5>
        <p
          href="#"
          ref="target"
          onMouseEnter={this.handleClick.bind(this)}
          onMouseLeave={this.handleClose.bind(this)}
          >{this.props.bio.substring(0,100)}...</p>
        <h5> {`${this.props.experience} year(s) of experience`}</h5>

        {btnContainer}

        <h4 style={{ marginTop: 25 , float:"right"}}><b>${this.props.ratePerHour}/hr</b></h4>

        <Popover
          placement='top'
          style={{width:"400px"}}
          container={this}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)} >
          <p>{this.props.bio}</p>
        </Popover>

      </div>
    );
  }
}
