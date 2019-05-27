import { connect } from "react-redux";
import CreatePostForm from "./create_post_form";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

const mdtp = dispatch => {
  return {
    processForm: post => dispatch(createPost(post)),
    toggleSelectedNew: postIndex => dispatch(toggleSelectedNew(postIndex)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdtp)(CreatePostForm);