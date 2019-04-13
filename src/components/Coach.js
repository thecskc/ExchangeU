import React, {Component} from "react";

import CoachItem from "./CoachItem";
import "./Coach.css";
import CoachesData from "./CoachesData";

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class Coach extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {

        const shuffledList = shuffle(CoachesData);
        const coachesComponents = shuffledList.map(coach => (
            <CoachItem key={coach.id} {...coach} />
        ));


        return (
            <div style={{marginTop: 16}}>
                <h1 style={{textAlign: "center", marginBottom: 8}}>
                    Browse our Coaches
                </h1>

                <div className="container">
                    {coachesComponents}
                </div>
            </div>
        );
    }
}

export default Coach;
