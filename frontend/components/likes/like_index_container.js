import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LikeIndex from "./like_index";
import { closeModal } from "../../actions/modal_actions";

const mstp = (state, ownProps) => {
  // would it be better to store likerIds on the post? 
  // the like index is really only returning user data
  const postId = ownProps.location.pathname.split("/")[2];
  let likeIds;
  let likes = [];

  if (postId) {
    likeIds = state.entities.posts[postId].likeIds;
    likes = likeIds.map(likeId => {
      const like = state.entities.likes[likeId];
      like["username"] = state.entities.users[like.userId].username;
      return like;
    });
  }

  return {
    likes
  };
};

const mdtp = dipatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mstp, mdtp)(LikeIndex));