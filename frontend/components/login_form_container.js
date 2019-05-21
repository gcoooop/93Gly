import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../actions/session_actions";

const mstp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "login"
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mstp, mdtp)(SessionForm);