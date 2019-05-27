import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";
import FiltersReducer from "./filters_reducer";
import PostSelectionReducer from "./post_selection_reducer";

const UiReducer = combineReducers({
  modal: ModalReducer,
  filter: FiltersReducer,
  selectedPosts: PostSelectionReducer
});

export default UiReducer;