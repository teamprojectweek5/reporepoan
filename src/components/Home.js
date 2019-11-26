import React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from "../helpers/fakeAuth";
import logo from "./images.png";

const LoginForm = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  let register = () => {
    fakeAuth.authenticate("ega", () => {
      history.replace(from);
    });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={logo} /> Signup to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input fluid icon="user" iconPosition="left" placeholder="firstName" type="text" />
            <Form.Input fluid icon="user" iconPosition="left" placeholder="LastName" type="text" />
            <Form.Input fluid icon="mail" iconPosition="left" placeholder="E-mail address" type="email" />
            <Form.Input fluid icon="phone" iconPosition="left" placeholder="Phone Number" type="text" />
            <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />
            <Form.Input fluid icon="date" iconPosition="left" placeholder="Password" type="date" />

            <Link to="/todo">
              <Button color="teal" fluid size="large" onClick={register}>
                Login
              </Button>
            </Link>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
