import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import styled from "styled-components";

import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/Home";
import AuthButton from "./components/AuthButton";

// import "./App.css";
import NavBar from "./components/NavBar";
import RegisterForm from "./components/RegisterForm";

// import Todo from "./components/Todo";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<NavBar />
				</div>
				<Switch>
					<Route exact path="/">
						{/* <LoginForm /> */}
            <RegisterForm/>
					</Route>
					<AuthButton />
					<PrivateRoute path="/todo"></PrivateRoute>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;


// export default class RegisterForm extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			hidden: true,
// 			password: ""
// 		};
// 		this.handlePasswordChange = this.handlePasswordChange.bind(this);
// 		this.toggleShow = this.toggleShow.bind(this);
// 	}

// 	toggleShow() {
// 		this.setState({ hidden: !this.state.hidden });
// 	}

// 	handlePasswordChange(event) {
// 		this.setState({ password: event.target.value });
// 	}

// 	componentDidMount() {
// 		if (this.props.password) {
// 			this.setState({ password: this.props.password });
// 		}
// 	}
// <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type={this.state.hidden ? "password" : "text"} value={this.state.password} onChange={this.handlePasswordChange} />
// 							<button onClick={this.toggleShow}>Show / Hide</button>