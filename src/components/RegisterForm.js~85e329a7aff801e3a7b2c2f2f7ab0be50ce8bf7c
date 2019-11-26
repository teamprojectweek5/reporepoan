import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from "../helpers/fakeAuth";
import logo from "./images.png";

export default class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true,
			password: ""
		};
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.toggleShow = this.toggleShow.bind(this);
	}

	toggleShow() {
		this.setState({ hidden: !this.state.hidden });
	}

	handlePasswordChange(event) {
		this.setState({ password: event.target.value });
	}

	componentDidMount() {
		if (this.props.password) {
			this.setState({ password: this.props.password });
		}
	}

	render() {
		return (
			<Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" color="teal" textAlign="center">
						<Image src={logo} /> Register your account
					</Header>
					<Form size="large">
						<Segment stacked>
							<Form.Input fluid icon="user" iconPosition="left" placeholder="firstName" type="text" />
							<Form.Input fluid icon="user" iconPosition="left" placeholder="LastName" type="text" />
							<Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" type="email" />
							<Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type={this.state.hidden ? "password" : "text"} value={this.state.password} onChange={this.handlePasswordChange} />
							<button onClick={this.toggleShow}>Show / Hide</button>

							<Link to="/todo">
								<Button color="teal" fluid size="large">
									Register
								</Button>
							</Link>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}


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