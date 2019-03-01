import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

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
    this.setState({ confirmMessage: true });
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
