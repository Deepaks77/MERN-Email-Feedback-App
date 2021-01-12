import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
export class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div class="card darken-1" key={survey._id}>
          <div class="card-content">
            <span class="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On:{new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div class="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
