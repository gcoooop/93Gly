import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";
import FiltersReducer from "./filters_reducer";
import SelectPostsReducer from "./select_posts_reducer";

const UiReducer = combineReducers({
  modal: ModalReducer,
  filter: FiltersReducer,
  selectedPosts: SelectPostsReducer
});

export default UiReducer;