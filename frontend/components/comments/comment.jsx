import React from "react";
import formatDate from "../../util/date_format_util";
import CreateCommentContainer from "./create/create_comment_container";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { createReply: false };

    this.deleteComment = this.deleteComment.bind(this);
    this.showCreateReply = this.showCreateReply.bind(this);
  }

  deleteComment(event) {
    this.props.deleteComment(this.props.comment);
  }

  showCreateReply(event) {
    this.setState({ createReply: true });
  }

  render() {
    const displayedDate = formatDate(this.props.comment.createdAt);
    const deleteButton = this.props.currentUserId === this.props.comment.authorId
      ? <i className="far fa-trash-alt" onClick={this.deleteComment} />
      : null;
    const replyEle = this.state.createReply
      ? <CreateCommentContainer parentId={this.props.comment.id}/>
      : null;

    return (
      <li className="comment-container">
        <div className="comment-info">
          <span className="comment-author">{this.props.comment.author}</span>
          <span className="comment-date">{displayedDate}</span>
        </div>
        <div className="comment-body">
          <p>{this.props.comment.body}</p>
        </div>
        <div className="comment-controls">
          <span onClick={this.showCreateReply}>Reply</span>
          { deleteButton }
        </div>
        { replyEle }
      </li>
    );    
  }
}

export default Comment;