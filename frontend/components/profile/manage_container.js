import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchPostsByIds } from "../../actions/post_actions";
import { clearErrors } from "../../actions/session_actions";
import Manage from "./manage";

const mstp = state => {
  return {
    postCount: Object.keys(state.entities.posts).length,
    currentUserPostIds: state.entities.users[state.session.currentUserId].postIds
  };
};

const mdtp = dispatch => {
  return {
    fetchPostsByIds: postIds => dispatch(fetchPostsByIds(postIds)),
    openModal: modal => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mstp, mdtp)(Manage);