import { connect } from "react-redux";
import SessionForm from "./session_form";

const mstp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    
  };
};

const mdtp = dispatch => {
  return {

  };
};

export default connect(mstp, mdtp)(SessionForm);