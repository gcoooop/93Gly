import { TOGGLE_SELECTED_NEW } from "../actions/select_posts_actions";

const NewPostSelectionReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case TOGGLE_SELECTED_NEW  :
      if (state.includes(action.postIndex)) {
        return state.filter( postIdx => postIdx !== action.postIndex );
      } else {
        return state.concat([action.postIndex]);
      }

    default:
      return state;
  };
};

export default NewPostSelectionReducer;