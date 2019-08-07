import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;

    case RECEIVE_POST:
      const { post } = action.payload;
      const receivedPost = { [post.id]: post };
      return Object.assign({}, state, receivedPost);

    case REMOVE_POST:
      const newState = Object.assign({}, state);
      delete newState[action.postId];
      return newState;

    case RECEIVE_COMMENT:
      const { comment } = Object.values(action.payload)[0];
      const commentedPost = state[comment.postId];
      const newCommentedPost = Object.assign({}, commentedPost);
      
      if (!commentedPost.commentIds.includes(comment.id)) {
        newCommentedPost.commentIds.push(comment.id);
      }

      return Object.assign({}, state, newCommentedPost);  

    default:
      return state;
  }
};

export default PostsReducer;