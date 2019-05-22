import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, clearErrors } from "../../actions/session_actions";

const mstp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "signup"
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mstp, mdtp)(SessionForm);