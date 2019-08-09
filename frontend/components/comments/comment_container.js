import { connect } from "react-redux";
import Comment from "./comment";
import { deleteComment } from "../../actions/comment_actions";

const mstp = state => {
  return {
    currentUserId: state.session.currentUserId
  };
};

const mdtp = dispatch => {
  return {
    deleteComment: comment => dispatch(deleteComment(comment))
  };
};

export default connect(mstp, mdtp)(Comment);