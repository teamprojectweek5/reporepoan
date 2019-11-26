import React, { Component } from "react";
import axios from "axios";

const API = `https://cobacoba-hayepe.herokuapp.com/user/register`;

class AddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      password: ""
    };
  }

  submitPost = event => {
    event.preventDefault();
    axios
      .post(API, this.state)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  render() {
    return <div></div>;
  }
}

export default AddNewUser;
