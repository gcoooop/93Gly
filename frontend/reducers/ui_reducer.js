import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";
import FiltersReducer from "./filters_reducer";
import NewPostReducer from "./new_post_reducer";

const UiReducer = combineReducers({
  modal: ModalReducer,
  filter: FiltersReducer,
  uploadedPosts: NewPostReducer
});

export default UiReducer;