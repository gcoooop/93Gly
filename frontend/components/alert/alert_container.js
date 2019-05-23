import { connect } from "react-redux";
import Alert from "./alert";

const mstp = state => {
  return {
    errors: state.errors.session
  };
};

export default connect(mstp, null)(Alert);