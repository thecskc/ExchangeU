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
      <CoachItem
        key={coach.id}
        name={coach.firstName}
        company={coach.company}
        experience={coach.experience}
        rate={coach.ratePerHour}
      />
    ));
    return <div>{coachesComponents}</div>;
  }
}

export default Coach;
