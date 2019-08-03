import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_COMMENTS:
      newState = Object.assign( {}, state, action.comments );
      return newState;
    case RECEIVE_COMMENT:
      const receivedComment = { [action.comment.id]: action.comment };
      newState = Object.assign({}, state, receivedComment);
      return newState;
    case REMOVE_COMMENT:
      newState = Object.assign( {}, state );
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;