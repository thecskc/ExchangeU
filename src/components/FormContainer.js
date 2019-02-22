import React, { Component } from "react";

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
      phoneNumber: undefined
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
  }

  render() {
    return (
      <FormComponent
        {...this.state} // sending properties of state using spread operator
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Form;
