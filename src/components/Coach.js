import React, {Component} from "react";

import CoachItem from "./CoachItem";
import CoachesData from "./CoachesData";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";

class Coach extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const coachesComponents = CoachesData.map(coach => (
            <CoachItem key={coach.id} {...coach} />
        ));
        return (


            <Grid container spacing={24}>

                <Grid item xs={4}></Grid>

                <Grid item xs={4}>
                    <Divider /><Divider />
                    <Typography component="h3" variant="h3" textAlign="center">
                        Choose a Coach!
                    </Typography>
                </Grid>

                <Grid item xs={4}></Grid>


                <Grid container spacing={24}>
                    {coachesComponents}
                </Grid>


            </Grid>


        );
    }
}

export default Coach;
