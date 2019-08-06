import React from "react";
import formatDate from "../../util/date_format_util";

const Comment = props => {
  const displayedDate = formatDate(props.comment.createdAt);
  return (
    <li className="comment-container">
      <div className="comment-info">
        <span className="comment-author">{props.comment.author}</span>
        <span className="comment-date">{displayedDate}</span>
      </div>
      <div className="comment-body">
        <p>{props.comment.body}</p>
      </div>
      <div className="comment-controls">
        {/* reply here */}
        {/* elipses */}
      </div>
    </li>
  );
};

export default Comment;