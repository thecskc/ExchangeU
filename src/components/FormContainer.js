import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import CoachesData from "./CoachesData";
import * as emailjs from "emailjs-com";

import FormComponent from "./FormComponent";

class Form extends Component {
  constructor(props) {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: undefined,
      confirmMessage: false
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let aboutInst =  CoachesData.find(coach => coach.id == this.props.coachId);
    let error="";
    if(!this.state.firstName){
      error = error + " Please add first name."
    }
    if(!this.state.lastName){
      error = error + " Please add last name."
    }
    if(!this.state.email){
      error= error+ " Please add email."
    }
    if(!this.state.phoneNumber){
      error= error + " Please add phone number.";
    }
    if(this.state.firstName && this.state.lastName && this.state.email && this.state.phoneNumber){
      var templateParams = {
        from_name: `${this.state.firstName} ${this.state.lastName}`,
        message_html: `Full Name: ${this.state.firstName} ${this.state.lastName}
                       Email: ${this.state.email}
                       Phone Number: ${this.state.phoneNumber}
    

                       Interested in Instructor : ${aboutInst.firstName}
                       Rate : ${aboutInst.ratePerHour}

                      `
      };

      emailjs.send('gmail', 'template_wemc9yXS', templateParams, 'user_8foUCAKzw9UdUezg0rnee')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });


      this.setState({ confirmMessage: true });
    }else{
      if(error){
        alert(error);
      }
    }

  }

  hideAlert = () => {
    this.setState({ confirmMessage: false });
  };

  render() {
    return (
      <div>
        <FormComponent
          {...this.state} // sending properties of state using spread operator
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.confirmMessage ? (
          <SweetAlert title="Success" onConfirm={this.hideAlert}>
            Your request has been submitted!
          </SweetAlert>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Form;
