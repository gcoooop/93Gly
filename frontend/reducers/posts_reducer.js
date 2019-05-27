import { RECEIEVE_POSTS, RECEIEVE_POST, REMOVE_POST, UPDATE_POST_ENTITY } from "../actions/post_actions";

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIEVE_POSTS:
      return action.posts;

    case RECEIEVE_POST:
      const receivedPost = { [action.post.id]: action.post };
      return Object.assign({}, state, receivedPost);

    case REMOVE_POST:
      const newState = Object.assign({}, state);
      delete newState[action.postId];
      return newState;

    case UPDATE_POST_ENTITY:
      const updatedPost = state[action.post.id];
      updatedPost.title = action.post.title;
      updatedPost.caption = action.post.caption;
      const updatedEntity = { [updatedPost.id]: updatedPost };
      return Object.assign({}, state, updatedEntity);

    default:
      return state;
  }
};

export default PostsReducer;