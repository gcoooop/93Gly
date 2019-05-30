import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import { fetchUser } from "../../actions/user_actions";
import PostShow from "./post_show";

const mstp = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId]
  };
};

const mdtp = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(mstp, mdtp)(PostShow);