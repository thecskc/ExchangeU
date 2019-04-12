import React, {Component} from "react";
import "./Landing.css";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import {Link, Router} from "@reach/router";


class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="landing-container">
                <div className="landing-hero">
                    <h1 className="landing-hero-item-header"> Exchange</h1>
                    <h2 className="landing-hero-item-subheading">Personalized training for technical interviews</h2>
                    <h2 className="landing-hero-item-subheading">by software engineers</h2>
                    <br/><br/>
                    <Link className="landing-hero-item-header" to="/coaches">Browse Coaches</Link>

                </div>

                <div className="landing-card-section">
                    <h1 style={{marginTop:"16px"}} className="landing-hero-item-header">How Does It Work? </h1>
                    <br/>
                    <br/>
                    <div className="landing-card">
                        <h1>Step 1: Pick a coach</h1>
                        <br/>
                        <h4>Browse through our coaches and choose one that you like!</h4>
                        <br/>
                        <p>Want a free introductory call with any of the coaches? Email us at info@exchangetheapp.com</p>

                    </div>
                    <div className="landing-card">
                        <h1>Step 2: Pick your payment plan</h1>
                        <br/>

                        <h4>Pay Per Session - Pick your coach, the number of sessions and pay their hourly rate!</h4>
                        <br/>
                        <h4>Income Sharing Agreement (ISA) - Apply to be trained for free and pay if and when you get a job! </h4>
                        <p>Note - ISA payments are between 3%-7% of your first year salary and vary by coach.</p>
                        <br/>

                        <p>For more info about payment methods, email us at info@exchangetheapp.com</p>

                    </div>
                    <div className="landing-card">
                        <h1>Step 3: Start Your Training!</h1>
                        <br/>

                        <h4>The Exchange team will contact you to set up your sessions!</h4>
                        <br/>
                    </div>


                </div>


                <div className="landing-blue-section">
                    <h1 className="landing-hero-item-header" style={{color:"white"}}>
                        What does the training involve?</h1>
                    <h3 className="landing-hero-item-subheading" style={{color:"white"}}>
                            Training is one on one and entirely personalized to your needs
                    </h3>
                    <br/>
                    <h3 className="landing-hero-item-subheading" style={{flexWrap:"wrap",alignSelf:"center"}}>
                        Training includes reviews of algorithms and system design, mock interviews, and custom problem sets.
                        Learn how to solve problems you have not seen before and improve your speed and communication skills.
                    </h3>
                    <br/>



                </div>

                <div className="landing-testimonials">
                    <br/><br/>

                    <h1 className="landing-hero-item-header" style={{color:"black", width:"100%", height:"25vh", alignSelf:"center"}}>
                        WORKS?
                    </h1>
                    <br/>

                    <div className="landing-testimonial-card">
                        WORKS?
                    </div>




                </div>




            </div>
        );

    }
}

export default Landing;
