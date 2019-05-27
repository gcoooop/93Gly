import { combineReducers } from "redux";
import ExistingPostSelectionReducer from "./existing_post_selection_reducer";
import NewPostSelectionReducer from "./new_post_selection_reducer";

const PostSelectionReducer = combineReducers({
  selectedExistingPosts: ExistingPostSelectionReducer,
  selectedNewPosts: NewPostSelectionReducer,
});

export default PostSelectionReducer;