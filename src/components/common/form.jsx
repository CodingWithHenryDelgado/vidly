import React, { Component } from 'react';
import Joi from 'joi-browser';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
     };

    validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(this.state.data, this.schema, options);

		if (!error) return null;

		const errors = {};

		for (let item of error.details) errors[item.path[0]] = item.message;

		return errors;
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};

	handleSubmit = (e) => {
		//Stop the app from doing a full page reload
		e.preventDefault();

		const errors = this.validate();
		this.setState({ errors: errors || {} });
		if (errors) return;
		//Don't do the bottom when using React, you should make a reference and then use that
		//As when using React you don't want to interact with the real DOM
		//const username = document.getElementById("username").value;
		this.doSubmit();
	};

    handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);

		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...this.state.data };
		data[input.name] = input.value;

		this.setState({ data, errors });
	};
}
 
export default Form;