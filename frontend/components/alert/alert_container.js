import { connect } from "react-redux";
import Alert from "./alert";
import { clearErrors } from "../../actions/session_actions";

const mstp = state => {
  return {
    errors: state.errors.session
  };
};

export default connect(mstp, null)(Alert);