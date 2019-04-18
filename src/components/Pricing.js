import React, {Component} from "react";
import "./Pricing.css"
import "./CoachItem.css"
import wallet from "../assets/wallet.svg";
import isa from "../assets/isaagreement.svg";
import paypersession from "../assets/paypersession.svg";
import {Link} from "@reach/router";

class Pricing extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="pricing-container">
                <div className="pricing-hero">
                    <div className="pricing-hero-left">
                        <h1 className="pricing-banner-heading" style={{padding: "16px"}}>Pricing Details</h1>
                        <h3 className="pricing-banner-subheading" style={{padding: "16px"}}>Choose one of these options
                            while you browse through coaches and the Exchange team will contact you with next steps.</h3>
                    </div>
                    <div className="pricing-hero-right">
                        <img
                            width="100%"
                            src={wallet}
                        />
                    </div>
                </div>

                <div className="pricing-details-section">

                    <div className="pricing-details-60 enlarge-small pricing-text-padding">

                        <h2 className="pricing-heading">Income Sharing Agreement (ISA)</h2>
                        <h3 className="pricing-subheading">Choose the "Apply for ISA" option</h3>
                        <br/>
                        <h4 className="pricing-subheading">Free training from Exchange coaches. You only pay if and when
                            you get a job! Payment is usually 3%-7% of your first year salary
                            and varies based on your application and the coach.</h4>
                        <br/>
                        <p className="pricing-description">Steps: </p>
                        <ol className="pricing-description">
                            <li>Fill out the <a href="https://forms.gle/LKhbM6pL49iyJoge7">ISA interest form</a></li>
                            <li>Coaches will review your profile</li>
                            <li>If coaches are interested in training you, you will get "proposals" from coaches.
                            Each proposal contains information on what technical areas they would like to focus on, the ISA rate (usually 3%-7% of your first-year salary, paid every month), the duration of training (at least 8-10 weeks usually)
                            , the validity of the ISA contract (usually tech jobs obtained 5-6 months from the start of training come under the ISA).
                            Please keep in mind that proposals vary by coach</li>
                            <li>You can get on a free 15-minute intro call and decide whether to accept or decline the proposals</li>
                        </ol>

                    </div>

                    <div className="pricing-details-40 disappear-small">
                        <img
                            className="#isapic"
                            src={isa}
                            alt="coach"
                            style={{alignSelf:"center", width: "75%", height: "75%"}}
                        />
                    </div>
                </div>


                <div className="pricing-details-section">

                    <div className="pricing-details-40 disappear-small">
                        <img
                            src={paypersession}
                            alt="coach"
                            style={{width: "100%", height: "100%"}}
                        />

                    </div>



                    <div className="pricing-details-60 enlarge-small pricing-text-padding">

                        <h2 className="pricing-heading">Pay-Per-Session</h2>
                        <h3 className="pricing-subheading">Choose the "Book Session" option</h3>
                        <br/>
                        <h4 className="pricing-subheading">You choose the number of hours of training and the coach!</h4>
                        <br/>
                        <p className="pricing-description">Steps: </p>
                        <ol className="pricing-description">
                            <li>Browse through <Link to="/coaches">coaches</Link></li>
                            <li>Choose a coach that fits your needs and criteria</li>
                            <li>Book a session</li>
                            <li>The Exchange team will set up a free 15-minute intro call after which you can choose the number of sessions you would like to have
                                and pay per session. </li>

                        </ol>

                    </div>

                </div>
                <br/>
                <br/>





            </div>


        );


    }

}

export default Pricing;
