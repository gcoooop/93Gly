import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import { openModal } from "../../actions/modal_actions";
import Manage from "./manage";

const mdtp = dispatch => {
  return {
    updateFilter: selectedPostId=> dispatch(updateFilter("selectedPostId", selectedPostId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(null, mdtp)(Manage);