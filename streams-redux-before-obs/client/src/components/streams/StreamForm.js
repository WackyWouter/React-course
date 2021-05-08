import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "error" : ""}`;
		// {...input} Adds all the properties from formProps.input as key value pair proterties on the input element
		// renderError(meta) checks if the input has been focused and unfocused before showing error
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		// Passed down by the parent component
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
			>
				<Field
					name="title"
					component={this.renderInput}
					label="Enter Title"
				/>
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		// only ran if the user did not enter a title
		errors.title = "Please fill in the title!";
	}

	if (!formValues.description) {
		// only ran if the user did not enter a title
		errors.description = "Please fill in the description!";
	}
	return errors;
};

export default reduxForm({
	form: "streamForm",
	validate: validate,
})(StreamForm);
