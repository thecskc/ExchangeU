import React, {Component} from "react";
import "./Landing.css";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="landing-container">
                <h1> Hello Landing Page Here</h1>

            </div>
        );

    }
}

export default Landing;
