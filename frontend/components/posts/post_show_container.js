import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShow from "./post_show";

const mstp = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId]
  };
};

const mdtp = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id))
  };
};

export default connect(mstp, mdtp)(PostShow);