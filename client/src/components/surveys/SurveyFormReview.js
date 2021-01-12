//SurveyForm Review shows user their form inputs for review
import React from "react";
import { connect } from "react-redux";
import FIELDS from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>

      {FIELDS.map(({ name, label }, index) => (
        <div key={name}>
          <div>
            <label>{label}</label>
            <div>{formValues[name]}</div>
          </div>
        </div>
      ))}

      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat white-text right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = ({
  form: {
    surveyForm: { values },
  },
}) => ({ formValues: values });
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
