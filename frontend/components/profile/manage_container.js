import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import Manage from "./manage";

const mdtp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(null, mdtp)(Manage);