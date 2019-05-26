import { TOGGLE_SELECTED } from "../actions/select_posts_actions";

const SelectPostsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case TOGGLE_SELECTED:
      if (state.includes(action.postId)) {
        return state.filter( postId => postId !== action.postId );
      } else {
        return state.concat([action.postId]);
      }

    default:
      return state;
  };
};

export default SelectPostsReducer;