import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/session_actions";
import Manage from "./manage";

const mstp = state => {
  return {
    postCount: Object.keys(state.entities.posts).length
  };
};

const mdtp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mstp, mdtp)(Manage);