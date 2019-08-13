import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let comments = {};
  
  switch (action.type) {
    case RECEIVE_COMMENTS:
      Object.values(action.payload).forEach( val => comments[val.comment.id] = val.comment );
      newState = Object.assign( {}, state, comments );
      return newState;

    case RECEIVE_COMMENT:
      const receivedComment = Object.values(action.payload)[0].comment;
      comments[receivedComment.id] = receivedComment;
      if (receivedComment.parentId) {
        const parentComment = state[receivedComment.parentId];
        parentComment.replyIds.push(receivedComment.id);
        comments[parentComment.id] = parentComment;
      }
      newState = Object.assign({}, state, comments);
      return newState;

    case REMOVE_COMMENT:
      newState = Object.assign({}, state);
      delete newState[action.comment.id];
      // removes comment from parents replies array
      let newParentComment
      if (action.comment.parentId) {
        newParentComment = newState[action.comment.parentId];
        newParentComment.replyIds = newParentComment.replyIds.filter(replyId => replyId !== action.comment.id);
        newState[action.comment.parentId] = newParentComment;
      }
      return newState;
      
    default:
      return state;
  }
};

export default CommentsReducer;