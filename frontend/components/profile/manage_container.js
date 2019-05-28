import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchUserPosts } from "../../actions/post_actions";
import { clearErrors } from "../../actions/session_actions";
import Manage from "./manage";

const mstp = state => {
  return {
    currentUserId: state.session.currentUserId
  };
};

const mdtp = dispatch => {
  return {
    fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
    openModal: modal => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mstp, mdtp)(Manage);