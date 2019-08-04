import React from "react";

const Comment = props => {
  return (
    <li>
      <span>{props.comment.author}</span>
      <p>{props.comment.body}</p>
    </li>
  );
};

export default Comment;