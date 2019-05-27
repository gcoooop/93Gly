import { connect } from "react-redux";
import EditPostForm from "./edit_post_form";
import { updatePost } from "../../actions/post_actions";

const mstp = state => {
  const selectedPostIds = state.ui.selectedPosts.selectedExistingPosts;
  const selectedPosts = {};
  selectedPostIds.forEach( id => selectedPosts[id] = state.entities.posts[id] );
  return {
    posts: selectedPosts, 
    uploadStatus: "editing"
  };
};

const mdtp = dispatch => {
  return {
    processForm: post => dispatch(updatePost(post)),
    toggleSelectedExisting: postId => dispatch(toggleSelectedExisting(postId))
  };
};

export default connect(mstp, mdtp)(EditPostForm);