import React from "react";
import formatDate from "../../util/date_format_util";
import CreateCommentContainer from "./create/create_comment_container";
import CommentContainer from "./comment_container";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { createReply: false };

    this.deleteComment = this.deleteComment.bind(this);
    this.showCreateReply = this.showCreateReply.bind(this);
    this.hideCreateReply = this.hideCreateReply.bind(this);
  }

  deleteComment(event) {
    this.props.deleteComment(this.props.comment);
  }

  showCreateReply(event) {
    this.setState({ createReply: true });
  }

  hideCreateReply(event) {
    this.setState({ createReply: false });
  }
  
  render() {
    const displayedDate = formatDate(this.props.comment.createdAt);
    const deleteButton = this.props.currentUserId === this.props.comment.authorId
      ? <i className="far fa-trash-alt" onClick={this.deleteComment} />
      : null;
    const replyEle = this.state.createReply
      ? <CreateCommentContainer parentId={this.props.comment.id} focus={true} hideCreateReply={this.hideCreateReply}/>
      : null;
    const repliesUl = this.props.replies.length
      ? (
        <ul className="comment-replies-list">
          <div className="comment-replies-left-bar" onClick={this.toggleRepliesEle}/>
          {this.props.replies.reverse().map(reply => <CommentContainer key={reply.id} comment={reply}/> )}
        </ul>
      )
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
        { repliesUl }
      </li>
    );    
  }
}

export default Comment;