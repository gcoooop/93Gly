import { RECEIVE_POST, RECEIVE_POST_ERRORS, CLEAR_POST_ERRORS, CLEAR_ERRORS, REMOVE_POST } from "../actions/post_actions";

const PostErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_POST, REMOVE_POST:
      return [];

    case RECEIVE_POST_ERRORS:
      return action.errors;

    case CLEAR_POST_ERRORS, CLEAR_ERRORS:
      return [];

    default:
      return state;
  };
};

export default PostErrorsReducer;