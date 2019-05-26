import { connect } from "react-redux";
import PostForm from "./post_form";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

const mstp = state => {
  return {
    post: { title: "", caption: "" },
    uploadStatus: "waiting"
  };
};

const mdtp = dispatch => {
  return {
    processForm: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mstp, mdtp)(PostForm);