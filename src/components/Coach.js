import React, { Component } from "react";

import CoachItem from "./CoachItem";
import CoachesData from "./CoachesData";

class Coach extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const coachesComponents = CoachesData.map(coach => (
      <CoachItem key={coach.id} {...coach} />
    ));
    return <div style={{ marginTop: 16 }}>{coachesComponents}</div>;
  }
}

export default Coach;
