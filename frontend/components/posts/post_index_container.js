import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchPosts } from "../../actions/post_actions";
import { toggleSelectedExisting } from "../../actions/select_posts_actions";

const mstp = state => {
  return {
    posts: Object.values(state.entities.posts),
    selectedNewPosts: state.entities.selectedPosts.selectedNewPosts
  };
};

const mdtp = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    toggleSelectedExisting: postId => dispatch(toggleSelectedExisting(postId))
  };
};

export default connect(mstp, mdtp)(PostIndex);