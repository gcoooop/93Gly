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

export const receiveLike = payload => {
  return {
    type: RECEIVE_LIKE,
    payload
  };
};

export const removeLike = payload => {
  return {
    type: REMOVE_LIKE,
    payload
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
  const likeId = like.id;
  return dispatch => {
    return LikeUtil.deleteLike(likeId)
      .then( like => dispatch(removeLike(like)) );
  };
};