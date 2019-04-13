import React, {Component} from "react";
import "./Pricing.css"
import "./CoachItem.css"


class Pricing extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="pricing-container">
                <br/>
                <br/>
                <h1 className="pricing-heading" style={{padding:"16px"}}>Pricing Details</h1>
                <h3 className="pricing-subheading" style={{padding:"16px"}}>Choose one of these options while you browse through coaches!</h3>
                <br/>
                <br/>
                <div className="pricing-card-section">
                    <div className="pricing-card">

                        <h2 className="pricing-heading">Pay-Per-Session</h2>
                        <h3 className="pricing-subheading">Choose the "Book session" option</h3>
                        <br/>
                        <p>Each coach has their own hourly rate. Choose a coach and put in a booking request.
                        Once this is done, the Exchange team will contact you with next steps</p>


                    </div>

                    <div className="pricing-card">
                        <h2 className="pricing-heading">Income Sharing Agreement (ISA)</h2>
                        <h3 className="pricing-subheading">Choose the "Apply for ISA" option</h3>
                        <br/>
                        <h4 className="pricing-subheading">Free training from Exchange coaches. You only pay if and when you get a job!</h4>
                        <br/>
                        <p>Once you apply, coaches review your profile and send you proposals that contain
                        the duration of your training, the percentage of your first year salary they wish to take, and other relevant
                        information. You can then decide whether or not to accept the proposal! The Exchange team will guide you in this process
                        </p>

                    </div>


                </div>


            </div>

        );


    }

}

export default Pricing;