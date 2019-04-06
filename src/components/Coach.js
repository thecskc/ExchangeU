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


    return (
      <div style={{ marginTop: 16 }}>
        <h1 style={{ textAlign: "center", marginBottom: 8 }}>
          Browse our Coaches
        </h1>
        {coachesComponents}
      </div>
    );
  }
}

export default Coach;
