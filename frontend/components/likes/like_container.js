import { connect } from "react-redux";
import { fetchLikesByPostId, createLike, deleteLike } from "../../actions/like_actions";
import Like from "./like";

const mstp = (state, ownProps) => {
  const currentUserId = state.session.currentUserId;
  let currentUserLike = null;
  const likes = [];
  if (ownProps.postId) {
    const post = state.entities.posts[ownProps.postId];
    currentUserLike = Object.values(state.entities.likes).find(like => like.userId === currentUserId && like.postId == ownProps.postId);
    post.likeIds.forEach(likeId => likes.push(state.entities.likes[likeId]));
  }

  return {
    likes,
    currentUserId,
    currentUserLike
  };
};

const mdtp = dispatch => {
  return {
    fetchLikesByPostId: postId => dispatch(fetchLikesByPostId(postId)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
  };
};

export default connect(mstp, mdtp)(Like);