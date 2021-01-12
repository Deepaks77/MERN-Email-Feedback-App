//surveyform shows a form for a user to add  input --edit mode
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import FIELDS from "./formFields";

export class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }, index) => (
      <Field
        required
        component={SurveyField}
        key={index}
        type="text"
        label={label}
        name={name}
      />
    ));
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) =>
            this.props.onSurveySubmit()
          )}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next<i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || "");
  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      if (name === "emails")
        errors[
          name
        ] = `You must provide a ${name} and emails should be commas seperated`;
      else errors[name] = `You must provide a ${name}`;
    }
  });

  return errors;
};
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
