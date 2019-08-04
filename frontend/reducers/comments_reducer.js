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
      Object.values(action.payload).forEach(val => comments[val.comment.id] = val.comment);
      newState = Object.assign({}, state, comments);
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