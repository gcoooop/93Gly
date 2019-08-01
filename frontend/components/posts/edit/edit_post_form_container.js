import { connect } from "react-redux";
import EditPostForm from "./edit_post_form";
import { fetchPostsByIds, updatePost, deletePost } from "../../../actions/post_actions";

const mstp = state => {
  return {
    posts: Object.values(state.entities.posts),
    currentUserPostIds: state.entities.users[state.session.currentUserId].postIds
  };
};

const mdtp = dispatch => {
  return {
    fetchPostsByIds: postIds => dispatch(fetchPostsByIds(postIds)),
    deletePost: idx => dispatch(deletePost(idx)),
    processForm: post => dispatch(updatePost(post))
  };
};

export default connect(mstp, mdtp)(EditPostForm);