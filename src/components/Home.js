import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import { fakeAuth } from "../helpers/fakeAuth";
import logo from "./images.png";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      password: "",
      mobileNumber: "",
      status: false
      //   isEdit: false
    };
  }
  
  componentDidMount() {
    axios
      .get(`https://cobacoba-hayepe.herokuapp.com/`)
      .then(result => {
        this.setState({
          allData: result.data
        });
      })
      .catch(error => console.log(error));
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitData = event => {
    event.preventDefault();
    const { allData, status, ...ambilSisanya } = this.state;
    console.log(ambilSisanya);
    axios
      .post(`https://cobacoba-hayepe.herokuapp.com/user/register`, ambilSisanya)
      .then(result => {
        console.log(result);
        this.setState({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          email: "",
          password: "",
          allData: result.data.allData
        });
      })
      .catch(error => console.log(error));
    // console.log(this.state);
  };

  render() {
    return (
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={logo} /> Signup to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input onChange= {this.handleChange} fluid icon="user" iconPosition="left" placeholder="firstName" type="text" name="firstName" />
              <Form.Input onChange= {this.handleChange} fluid icon="user" iconPosition="left" placeholder="LastName" type="text" name="lastName" />
              <Form.Input onChange= {this.handleChange} fluid icon="mail" iconPosition="left" placeholder="E-mail address" type="email" name="email" />
              <Form.Input onChange= {this.handleChange} fluid icon="phone" iconPosition="left" placeholder="Phone Number" type="text" name="mobileNumber" />
              <Form.Input onChange= {this.handleChange} fluid icon="lock" iconPosition="left" placeholder="Password" type="password" name="password" />
              <Form.Input onChange= {this.handleChange} fluid icon="calendar" iconPosition="left" placeholder="Password" type="date" name="dateOfBirth" />

              <Link to="/todo">
                <Button color="teal" fluid size="large" onClick={this.submitData}>
                  Signup
                </Button>
              </Link>
            </Segment>
          </Form>
          <Message>
            <Link to="/">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
};

export default LoginForm;
