import React from "react";
import formatDate from "../../util/date_format_util";

const Comment = props => {
  const displayedDate = formatDate(props.comment.createdAt);
  const deleteButton = props.currentUserId === props.comment.authorId 
    ? <i className="far fa-trash-alt" onClick={() => props.deleteComment(props.comment)}/>
    : null;

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
        <span>Reply</span>
        { deleteButton }
      </div>
    </li>
  );
};

export default Comment;