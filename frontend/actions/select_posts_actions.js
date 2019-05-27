export const TOGGLE_SELECTED_EXISTING = "TOGGLE_SELECTED_EXISTING";
export const TOGGLE_SELECTED_NEW = "TOGGLE_SELECTED_NEW";

export const toggleSelectedExisting = postId => {
  return {
    type: TOGGLE_SELECTED_EXISTING,
    postId
  };
};

export const toggleSelectedNew = postIndex => {
  return {
    type: TOGGLE_SELECTED_NEW,
    postIndex
  };
};