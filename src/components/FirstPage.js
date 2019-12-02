import React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from "../helpers/fakeAuth";
import logo from "./images.png";
import axios from "axios";

const LoginForm = () => {
  let history = useHistory();
  let location = useLocation();
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  }

  let { from } = location.state || { from: { pathname: "/" } };

  let login = () => {
    axios
      .post(`https://cobacoba-hayepe.herokuapp.com/user/login`, user)
      .then(result => {
        if (result.status === 200) {
          fakeAuth.authenticate("ega", () => {
            history.replace(from);
          });
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={logo} /> Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input name="email" fluid icon="user" iconPosition="left" placeholder="E-mail address" type="email" value={user.email} onChange={handleChange} />
            <Form.Input name="password" fluid icon="lock" iconPosition="left" placeholder="Password" type="password" value={user.password} onChange={handleChange} />

            <Button color="teal" fluid size="large" onClick={login}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/register">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
