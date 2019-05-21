import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";

const mstp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "signup"
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mstp, mdtp)(SessionForm);