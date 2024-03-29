//SurveyNew shows surveyform and surveyformreview

import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import { reduxForm } from "redux-form";
import SurveyFormReview from "./SurveyFormReview";
export class SurveyNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormReview: false,
    };
  }
  renderContent() {
    if (this.state.showFormReview)
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
