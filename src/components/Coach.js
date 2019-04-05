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

    const coachRows = function(){
        const retList = [];
        for(let i=0;i<coachesComponents.length-1;i++){
            retList.push(
                <div style={{display:"block"}}>
                    {coachesComponents[i]}
                    {coachesComponents[i+1]}
                </div>
            );

        }
        return retList;

    };

    const coaches = coachRows();
    return (
      <div style={{ marginTop: 16 }}>
        <h1 style={{ textAlign: "center", marginBottom: 8 }}>
          Browse our Coaches
        </h1>
        {coaches}
      </div>
    );
  }
}

export default Coach;
