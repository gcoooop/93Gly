import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import { fetchCommentsByPostId } from "../../actions/comment_actions";
import PostShow from "./post_show";

const mstp = (state, ownProps) => {
  const post = state.entities.posts[ownProps.match.params.postId];
  const comments = [];
  let photographer;
  if (post) {
    photographer = state.entities.users[post.photographerId];
    post.commentIds.forEach(commentId => comments.push(state.entities.comments[commentId]));
  };

  return {
    post,
    photographer,
    comments
  };
};

const mdtp = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    fetchCommentsByPostId: postId => dispatch(fetchCommentsByPostId(postId))
  };
};

export default connect(mstp, mdtp)(PostShow);