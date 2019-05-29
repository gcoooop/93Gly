import { connect } from "react-redux";
import Modal from "./modal";
import { closeModal } from "../../actions/modal_actions";
import  { clearUploadedPostEntities } from "../../actions/post_actions";

const mstp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdtp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearUploadedPostEntities: () => dispatch(clearUploadedPostEntities())
  };
};

export default connect(mstp, mdtp)(Modal);