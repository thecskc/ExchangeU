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
                    <h2 className="landing-hero-item-subheading">
                        Personalized training for technical interviews
                    </h2>
                    <h2 className="landing-hero-item-subheading">
                        by software engineers
                    </h2>
                    <br/>
                    <br/>
                    <Link className="landing-hero-item-header btn-gradient yellow large" to="/coaches">
                        <h3 className="landing-her-item-header">Browse Coaches</h3>
                    </Link>
                </div>

                <div className="landing-card-section">
                    <h1
                        style={{marginTop: "16px"}}
                        className="landing-hero-item-header"
                    >
                        How Does It Work?{" "}
                    </h1>
                    <br/>
                    <br/>
                    <div className="landing-card">
                        <h1>Step 1: Pick a coach</h1>
                        <br/>
                        <h4>Browse through our coaches and choose one that you like!</h4>
                        <br/>
                        <p>
                            Want a free 15-minute introductory call with any of the coaches or don't find the coach for your needs? Email us at
                            info@exchangetheapp.com
                        </p>
                    </div>
                    <div className="landing-card">
                        <h1>Step 2: Pick your payment plan</h1>
                        <br/>

                        <h4>
                            Pay Per Session - Pick your coach, the number of sessions and pay
                            their hourly rate!
                        </h4>
                        <br/>
                        <h4>
                            Income Sharing Agreement (ISA) - Apply to be trained for free and
                            pay if and when you get a job!{" "}
                        </h4>
                        <p>
                            Note - ISA payments are usually between 3%-7% of your first year salary
                            and vary by coach.
                        </p>
                        <br/>

                        <p>
                            For more info about payment methods check out <Link to="/pricing">the pricing page</Link>
                        </p>
                    </div>
                    <div className="landing-card">
                        <h1>Step 3: Start Your Training!</h1>
                        <br/>

                        <h4>The Exchange team will contact you to set up your sessions!</h4>
                        <br/>
                    </div>
                </div>

                <div className="landing-blue-section">
                    <h1 className="landing-hero-item-header" style={{color: "white"}}>
                        What does the training involve?
                    </h1>
                    <h3
                        className="landing-hero-item-subheading"
                        style={{color: "white"}}
                    >
                        Training is one on one and entirely personalized to your needs
                    </h3>
                    <br/>
                    <h3
                        className="landing-hero-item-subheading"
                        style={{flexWrap: "wrap", alignSelf: "center"}}
                    >
                        Training includes reviews of algorithms and system design, mock
                        interviews, and custom problem sets. Learn how to solve problems you
                        have not seen before and improve your speed and communication
                        skills.
                    </h3>
                    <br/>
                </div>

                <div className="landing-testimonials">
                    <br/>
                    <br/>
                    <h1
                        style={{
                            color: "black",
                            alignSelf: "center"

                        }}
                    >
                        Testimonials
                    </h1>
                    <br/>

                    <div className="landing-testimonials-cards-section">

                        <div className="landing-testimonial-card">
                            <h3>Mo's Exchange</h3>
                            <br/>

                            <p>
                            Overall I found my Exchange experience very helpful and
                            encouraging. My coach was excellent, he identified my strengths
                            and weaknesses correctly. He also suggested hints during the
                            interview which steered me in the right direction. The problems
                            were also well chosen to determine my skill level. I would
                            recommend him to others and I got a lot out of just one session.
                            </p>
                        </div>
                        <div className="landing-testimonial-card">
                            <h3>Jev's Exchange</h3>
                            <br/>
                            <p>
                                I would give my coach a 4.75/5. He was very good at making sure
                                each interview was scheduled according to my needs, and I felt
                                much more confident in my interview. In the short amount of time
                                we had, we were able to work through a good amount of problems,
                                and he chose the ones that exercised my abilities for thinking
                                problems through. I would use Exchange again, and I would
                                definitely recommend it to a friend.
                            </p>
                        </div>
                        <div className="landing-testimonial-card">
                            <h3>Hsiang's Exchange</h3>
                            <br/>
                            <p>
                                My coach was very attentive to what I needed. I really needed some
                                extra resources to prepare for my upcoming interviews, so I
                                contacted Exchange for more info. The founders of Exchange
                                connected me with a Google coach, which was pretty awesome because
                                he prepared me more thoroughly than my friends, clubs, or
                                interview prep books did. I felt very confident going into my
                                phone interviews and I'm certain I moved onto the next round. For
                                me, using Exchange was all about increasing my chances and
                                Exchange helped alot with that.
                            </p>
                        </div>
                        <div className="landing-testimonial-card">
                            <h3>Moon's Exchange</h3>
                            <br/><br/>
                            <p>
                                I read a lot of books such as CTCI but I was not able to get to
                                the level needed to solve some hard Leetcode problems. I met with
                                my coach over a month and I am now able to handle the hard
                                Leetcode problems much better than I was able to before.
                            </p>
                        </div>
                        <div className="landing-testimonial-card">
                            <h3>Daniel's Exchange</h3>
                            <br/>
                            <p>
                                My 3 sessions with my technical interview coach Kim were great! We
                                talked about Uber and his role there and how he prepared for his
                                interview. He was able to understand that I lagged in topics like
                                DP and Graphs. So we spent a lot of time working on those areas.
                                Now, I feel confident about my onsite interview in two weeks!
                                Daniel’s Exchange
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Landing;
