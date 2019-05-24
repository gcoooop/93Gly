import { connect } from "react-redux";
import Modal from "./modal";
import { closeModal } from "../../actions/modal_actions";

const mstp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdtp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mstp, mdtp)(Modal);