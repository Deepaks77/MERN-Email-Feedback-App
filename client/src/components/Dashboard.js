import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <Link className="btn-floating btn-large red" to="/surveys/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
