import { connect } from "react-redux";
import EditPostForm from "./edit_post_form";
import { updatePost } from "../../../actions/post_actions";

const mstp = state => {
  return {
    posts: Object.values(state.entities.posts)
  };
};

const mdtp = dispatch => {
  return {
    processForm: post => dispatch(updatePost(post))
  };
};

export default connect(mstp, mdtp)(EditPostForm);