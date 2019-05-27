import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import PostsReducer from "./posts_reducer";
import PostSelectionReducer from "./post_selection_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  selectedPosts: PostSelectionReducer
});

export default EntitiesReducer;