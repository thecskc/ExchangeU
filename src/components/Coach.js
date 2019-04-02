import React, { Component } from "react";

import CoachItem from "./CoachItem";
import CoachesData from "./CoachesData";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

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


        <Grid container spacing={24}>

            <Typography component="h3" variant="h3" textAlign="center">
                    Choose a Coach!
            </Typography>


            <Grid container spacing={24}>
                {coachesComponents}
            </Grid>

        </Grid>



    );
  }
}

export default Coach;
