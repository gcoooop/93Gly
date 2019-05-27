import { TOGGLE_SELECTED_EXISTING } from "../actions/select_posts_actions";

const ExistingPostSelectionReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case TOGGLE_SELECTED_EXISTING:
      if (state.includes(action.postId)) {
        return state.filter( postId => postId !== action.postId );
      } else {
        return state.concat([action.postId]);;
      }
    default:
      return state;
  };
};

export default ExistingPostSelectionReducer;