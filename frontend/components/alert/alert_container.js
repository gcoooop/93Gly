import { connect } from "react-redux";
import Alert from "./alert";
import { clearErrors } from "../../actions/session_actions";

const mstp = state => {
  let errors = [];
  Object.keys(state.errors).forEach( key => errors = errors.concat(state.errors[key]) );
  return {
    errors
  };
};

const mdtp = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mstp, mdtp)(Alert);