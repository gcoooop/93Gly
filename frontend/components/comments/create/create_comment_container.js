import { connect } from "react-redux";
import { createComment } from "../../../actions/comment_actions";
import CreateComment from "./create_comment";

const mstp = state => {
  return {

  };
};

const mdtp = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};

export default connect(mstp, mdtp)(CreateComment);