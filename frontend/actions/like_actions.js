import * as LikeUtil from "../util/like_util";

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLikes = payload => {
  return {
    type: RECEIVE_LIKES,
    payload
  };
};

export const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

export const removeLike = likeId => {
  return {
    type: REMOVE_LIKE,
    likeId
  };
};

export const fetchLikesByPostId = postId => {
  return dispatch => {
    return LikeUtil.fetchLikesByPostId(postId)
      .then( likes => dispatch(receiveLikes(likes)));
  };
};

export const createLike = like => {
  return dispatch => {
    return LikeUtil.createLike(like)
      .then( like => dispatch(receiveLike(like)));
  };
};

export const deleteLike = like => {
  return dispatch => {
    return LikeUtil.deleteLike(like)
      .then( like => dispatch(removeLike(like.id)));
  };
};