import * as CommentUtil from "../util/comment_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    id: comment.id
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
      .then( comment => dispatch(receiveComment(comment)) );
  };
};

export const deleteComment = comment => {
  return dispatch => {
    return Comment.deleteComment(comment)
      .then( comment => dispatch(removeComment(comment)) );
  };
};