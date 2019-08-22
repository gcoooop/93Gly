import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import PostsReducer from "./posts_reducer";
import CommentsReducer from "./comments_reducer";
import LikesReducer from "./likes_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  comments: CommentsReducer,
  likes: LikesReducer,
  posts: PostsReducer,
});

export default EntitiesReducer;