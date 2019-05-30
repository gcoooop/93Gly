import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;

    case RECEIVE_POST:
      return Object.assign({}, state, action.payload.post);

    case REMOVE_POST:
      const newState = Object.assign({}, state);
      delete newState[action.postId];
      return newState;

    default:
      return state;
  }
};

export default PostsReducer;