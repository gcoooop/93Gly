import { connect } from "react-redux";
import Comment from "./comment";
import { deleteComment, fetchCommentsByPostId } from "../../actions/comment_actions";

const mstp = state => {
  return {
    currentUserId: state.session.currentUserId
  };
};

const mdtp = dispatch => {
  return {
    deleteComment: comment => dispatch(deleteComment(comment)),
    fetchCommentsByPostId: postId => dispatch(fetchCommentsByPostId(postId)),
  };
};

export default connect(mstp, mdtp)(Comment);