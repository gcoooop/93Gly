import { connect } from "react-redux";
import EditPostForm from "./edit_post_form";
import { updatePost, updatePostEntity } from "../../../actions/post_actions";

const mstp = state => {
  // const selectedPostIds = state.entities.selectedPosts.selectedExistingPosts;
  // const selectedPosts = {};
  // selectedPostIds.forEach( id => selectedPosts[id] = state.entities.posts[id] );
  return {
    posts: Object.values(state.entities.posts),
    uploadStatus: "editing"
  };
};

const mdtp = dispatch => {
  return {
    updatePostEntity: post => dispatch(updatePostEntity(post)),
    processForm: post => dispatch(updatePost(post))
  };
};

export default connect(mstp, mdtp)(EditPostForm);