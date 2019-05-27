import { connect } from "react-redux";
import EditPostForm from "./edit_post_form";
import { updatePost, deletePost } from "../../../actions/post_actions";

const mstp = state => {
  return {
    posts: Object.values(state.entities.posts)
  };
};

const mdtp = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(id)),
    processForm: post => dispatch(updatePost(post))
  };
};

export default connect(mstp, mdtp)(EditPostForm);