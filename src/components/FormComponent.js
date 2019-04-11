import React from "react";

import "./FormComponent.css";
import Navbar from "./Navbar";

function FormComponent(props) {
    return (
        <div>
            <Navbar/>

            <form id="form" onSubmit={props.handleSubmit}>
                <h1 className="fs-title">Book an Appointment</h1>
                {/* <h2 className="fs-subtitle"> John Doe</h2> */}
                <fieldset>
                    <input
                        type="text"
                        id="first-name"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={props.firstName}
                        onChange={props.handleChange}
                    />
                    <input
                        type="text"
                        id="last-name"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={props.lastName}
                        onChange={props.handleChange}
                    />

                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        value={props.email}
                        onChange={props.handleChange}
                    />
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        name="phoneNumber"
                        value={props.phoneNumber}
                        onChange={props.handleChange}
                    />
                </fieldset>
                <br/>
                <button className="action-button">Submit</button>
            </form>
        </div>
    );
}

export default FormComponent;
