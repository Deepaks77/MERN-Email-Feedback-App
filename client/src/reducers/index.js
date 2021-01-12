import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveyReducer from "./surveyReducer";
import { reducer as reduxForm } from "redux-form";
export default combineReducers({
  auth: authReducer,
  form: reduxForm, //form word is reserved key for redux form reducer, redux form brings its own reducer called reduxform with form key
  surveys: surveyReducer,
});
