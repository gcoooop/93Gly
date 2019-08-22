import { RECEIVE_LIKES, REMOVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIKES:
      return Object.assign({}, state, action.likes);

    case RECEIVE_LIKE:
      const receviedLike = { [action.like.id]: action.like };
      return Object.assign({}, state, receviedLike);

    case REMOVE_LIKE:
      const newState = Object.assign({}, state);
      delete newState[action.likeId];
      return newState;

    default:
      break;
  }
};

export default LikesReducer;