import React, {Component} from "react";
import "./Pricing.css"
import "./CoachItem.css"
import wallet from "../assets/wallet.svg";
import cash from "../assets/cash.svg";
import handshake from "../assets/handshake.svg";

class Pricing extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="pricing-container">
                <div className="pricing-hero">
                  <div className="pricing-hero-left">
                    <h1 className="pricing-banner-heading" style={{padding:"16px"}}>Pricing Details</h1>
                    <h3 className="pricing-banner-subheading" style={{padding:"16px"}}>Choose one of these options while you browse through coaches!</h3>
                  </div>
                  <div className="pricing-hero-right">
                    <img
                      width="100%"
                      src={wallet}
                    />
                  </div>
                </div>
                <div className="pricing-card-section">
                    <div className="pricing-card">
                        <img
                          src={cash}
                          alt="coach"
                          style={{ width: 48, height: 48 }}
                        />
                        <h2 className="pricing-heading">Pay-Per-Session</h2>
                        <h3 className="pricing-subheading">Choose the "Book session" option</h3>
                        <br/>
                        <p> Each coach has their own hourly rate. You can choose a coach and put in a booking request after which the Exchange team will contact you
                            with next steps</p>


                    </div>

                    <div className="pricing-card">
                        <img
                          src={handshake}
                          alt="coach"
                          style={{ width: 48, height: 48 }}
                        />
                        <h2 className="pricing-heading">Income Sharing Agreement (ISA)</h2>
                        <h3 className="pricing-subheading">Choose the "Apply for ISA" option</h3>
                        <br/>
                        <h4 className="pricing-subheading">Free training from Exchange coaches. You only pay if and when you get a job! Payment is usually 3%-7% of your first year salary
                        and depends on the coach.</h4>
                        <br/>
                        <p> Once you apply, coaches review your profile and send you proposals that contain
                        the duration of your training, the percentage of your first year salary they wish to take, and other relevant
                        information. You can then decide whether or not to accept the proposal and the Exchange team will reach out to you with next steps.</p>

                    </div>


                </div>


            </div>

        );


    }

}

export default Pricing;
