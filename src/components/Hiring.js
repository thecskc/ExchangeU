import React, {Component} from "react";
import {Link, Router} from "@reach/router";
import "./Pricing.css"
import hiring from "../assets/hiring.svg";

class Hiring extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (


            <div className="pricing-container">
                <div className="pricing-hero">
                    <div className="pricing-hero-left">
                        <h1 className="pricing-banner-heading">Hire Exchange Users For Free</h1>
                        <h3 className="pricing-banner-subheading">Our coaches rate our users on their skills.
                            Interview and hire vetted Exchange users that fit your needs - for free</h3>
                        <br/>
                        <a
                            style={{alignSelf: "flex-start"}}
                            className="landing-button"
                            href="https://form.jotform.com/91079157284161"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="pricing-hero-right">
                        <img
                            width="100%"
                            src={hiring}
                        />
                    </div>
                </div>


            </div>


        );
    }


}

export default Hiring;