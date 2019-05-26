export const TOGGLE_SELECTED = "TOGGLE_SELECTED";

export const toggleSelected = postId => {
  return {
    type: TOGGLE_SELECTED,
    postId
  };
};