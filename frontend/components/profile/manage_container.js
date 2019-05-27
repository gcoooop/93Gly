import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchPosts } from "../../actions/post_actions";
import Manage from "./manage";

// const mstp = state => {
//   return {

//   };
// };

const mdtp = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(null, mdtp)(Manage);