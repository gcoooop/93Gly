import React from "react";

const Comment = props => {
  return (
    <li>
      {props.comment.body}
    </li>
  );
};

export default Comment;