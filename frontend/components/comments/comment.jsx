import React from "react";
import formatDate from "../../util/date_format_util";

const Comment = props => {
  const displayedDate = formatDate(props.comment.createdAt);
  return (
    <li>
      <div>
        <span>{props.comment.author}</span>
        <span>{displayedDate}</span>
      </div>
      <p>{props.comment.body}</p>
    </li>
  );
};

export default Comment;