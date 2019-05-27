import { connect } from "react-redux";
import CreatePostForm from "./create_post_form";
import { createPost, createUploadedPostEntity, deleteUploadedPostEntity, clearUploadedPostEntities } from "../../../actions/post_actions";
import { closeModal } from "../../../actions/modal_actions";

const mstp = state => {
  return {
    uploadedPosts: state.ui.uploadedPosts
  };
};

const mdtp = dispatch => {
  return {
    createUploadedPostEntity: post => dispatch(createUploadedPostEntity(post)),
    deleteUploadedPostEntity: id => dispatch(deleteUploadedPostEntity(id)),
    clearUploadedPostEntities: () => dispatch(clearUploadedPostEntities()),
    processForm: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mstp, mdtp)(CreatePostForm);