import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import { fetchCommentsByPostId } from "../../actions/comment_actions";
import { fetchLikesByPostId } from "../../actions/like_actions";
import PostShow from "./post_show";

const mstp = (state, ownProps) => {
  const post = state.entities.posts[ownProps.match.params.postId];
  const comments = [];
  const likes = [];
  let photographer;
  if (post) {
    photographer = state.entities.users[post.photographerId];
    post.commentIds.forEach(commentId => comments.push(state.entities.comments[commentId]));
  };

  return {
    post,
    photographer,
    comments,
    likes,
    loggedIn: !!state.session.currentUserId
  };
};

const mdtp = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    fetchCommentsByPostId: postId => dispatch(fetchCommentsByPostId(postId)),
    fetchLikesByPostId: postId => dispatch(fetchLikesByPostId(postId))
  };
};

export default connect(mstp, mdtp)(PostShow);