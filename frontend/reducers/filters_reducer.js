import { UPDATE_FILTER, REMOVE_FILTER_VALUE, CLEAR_FILTERS } from "../actions/filter_actions";

const FiltersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_FILTER:
      const receivedFilter = { [action.filter]: action.value };
      return Object.assign({}, state, receivedFilter);

    case REMOVE_FILTER_VALUE:
      const newState = Object.assign({}, state);
      delete newState[action.filter][action.value];
      return newState;

    case CLEAR_FILTERS:
      return {};

    default:
      return state;
  }
};

export default FiltersReducer;