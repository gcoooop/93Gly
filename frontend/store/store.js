import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import RootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) => {
  if (process.env.NODE_ENV === "production") {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk));
  } else {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));
  }
};

export default configureStore;