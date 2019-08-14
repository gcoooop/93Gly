import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import PostsReducer from "./posts_reducer";
import CommentsReducer from "./comments_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  comments: CommentsReducer,
  posts: PostsReducer,
});

export default EntitiesReducer;