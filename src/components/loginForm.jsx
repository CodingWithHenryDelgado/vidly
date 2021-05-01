import React, { Component } from "react";

class LoginForm extends Component {
	username = React.createRef();

	// componentDidMount() {
	// 	this.username.current.focus();
	// }

	//Stop the app from doing a full page reload
	handleSubmit = (e) => {
		e.preventDefault();

		// Call the server

		//Don't do the bottom when using React, you should make a reference and then use that
		//As when using React you don't want to interact with the real DOM
		//const username = document.getElementById("username").value;

		const username = this.username.current.value;

		console.log("");
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							autoFocus
							ref={this.username}
							id="username"
							type="text"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input id="password" type="text" className="form-control" />
					</div>
					<button className="btn btn-primary">Login</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
