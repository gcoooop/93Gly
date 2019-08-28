import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;

    case RECEIVE_POST:
      const { post } = action.payload;
      const receivedPost = { [post.id]: post };
      return Object.assign({}, state, receivedPost);

    case REMOVE_POST:
      delete newState[action.postId];
      return newState;

    case RECEIVE_COMMENT:
      const receivedComment = Object.values(action.payload)[0].comment;
      const commentedPost = state[receivedComment.postId];
      const newCommentedPost = Object.assign({}, commentedPost);
      if (!commentedPost.commentIds.includes(receivedComment.id)) {
        newCommentedPost.commentIds.push(receivedComment.id);
      }
      return Object.assign({}, state, newCommentedPost);  

    case REMOVE_COMMENT:
      const removedComment = action.comment;
      const removedCommentPost = state[removedComment.postId];
      const newRemovedCommentPost = Object.assign({}, removedCommentPost);
      if (removedCommentPost.commentIds.includes(removedComment.id)) {
        newRemovedCommentPost.commentIds = newRemovedCommentPost.commentIds.filter(commentId => commentId !== removedComment.id);
      }
      newState[newRemovedCommentPost.id] = newRemovedCommentPost;
      return newState;

    case RECEIVE_LIKE:
      const likedPost = state[action.payload.like.postId];
      likedPost.likeIds.push(action.payload.like.id);
      return Object.assign({}, state, {[likedPost.id]: likedPost});

    case REMOVE_LIKE:
      const unlikedPost = state[action.payload.like.postId];
      unlikedPost.likeIds = unlikedPost.likeIds.filter(likeId => likeId != action.payload.like.id);
      return Object.assign({}, state, {[unlikedPost.id]: unlikedPost});

    default:
      return state;
  }
};

export default PostsReducer;