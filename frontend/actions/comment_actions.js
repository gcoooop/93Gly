import * as CommentUtil from "../util/comment_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = payload => {
  return {
    type: RECEIVE_COMMENTS,
    payload
  };
};

export const receiveComment = payload => {
  return {
    type: RECEIVE_COMMENT,
    payload
  };
};

export const removeComment = payload => {
  return {
    type: REMOVE_COMMENT,
    comment: payload.comment
  };
};

export const fetchCommentsByPostId = postId => {
  return dispatch => {
    return CommentUtil.fetchCommentsByPostId(postId)
      .then( comments => dispatch(receiveComments(comments)) );
  };
};

export const createComment = comment => {
  return dispatch => {
    return CommentUtil.createComment(comment)
      .then( payload => dispatch(receiveComment(payload)) );
  };
};

export const deleteComment = comment => {
  return dispatch => {
    return CommentUtil.deleteComment(comment)
      .then( payload => dispatch(removeComment(payload)) );
  };
};