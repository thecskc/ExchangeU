import React, { Component } from "react";

import CoachItem from "./CoachItem";

class Coach extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <CoachItem />
        <CoachItem />
        <CoachItem />
        <CoachItem />
      </div>
    );
  }
}

export default Coach;
