import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIKES:
      const receviedLikes = {};
      Object.values(action.payload).forEach( ele => receviedLikes[ele.like.id] = ele.like );
      return Object.assign({}, state, receviedLikes);

    case RECEIVE_LIKE:
      const receviedLike = { [action.payload.like.id]: action.payload.like };
      return Object.assign({}, state, receviedLike);

    case REMOVE_LIKE:
      const newState = Object.assign({}, state);
      delete newState[action.payload.like.id];
      return newState;

    default:
      return state;
  }
};

export default LikesReducer;