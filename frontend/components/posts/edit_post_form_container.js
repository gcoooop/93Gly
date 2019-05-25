import { connect } from "react-redux";
import PostForm from "./post_form";
import { updatePost } from "../../actions/post_actions";

const mstp = state => {
  return {
    // post: 
    formType: "edit"
  };
};

const mdtp = dispatch => {
  return {
    processForm: post => dispatch(updatePost(post))
  };
};

export default connect(mstp, mdtp)(PostForm);