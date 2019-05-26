import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchPosts } from "../../actions/post_actions";
import { toggleSelected } from "../../actions/select_posts_actions";

const mstp = state => {
  return {
    posts: Object.values(state.entities.posts),
    selectedPosts: state.ui.selectedPosts
  };
};

const mdtp = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    toggleSelected: postId => dispatch(toggleSelected(postId))
  };
};

export default connect(mstp, mdtp)(PostIndex);