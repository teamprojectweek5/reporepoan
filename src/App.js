import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import styled from "styled-components";

import PrivateRoute from "./components/PrivateRoute";

import AuthButton from "./components/AuthButton";

// import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./components/FirstPage";
import RegisterForm from "./components/RegisterForm";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {/* <Wrapper> */}
          {/* <Header>React Todo</Header> */}
          {/* <Todo /> */}
          {/* </Wrapper> */}
          {/* <Section dark>Dari Wrapper</Section> */}
        </div>
        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          {/* <Route path="/login"></Route> */}
          {/* <Login /> */}
          {/* <AuthButton /> */}
          <Route path="/register">
            <RegisterForm />
          </Route>
          {/* <PrivateRoute path="/profile"></PrivateRoute> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
