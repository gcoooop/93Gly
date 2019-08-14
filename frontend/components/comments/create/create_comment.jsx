import React from "react";
import { withRouter } from "react-router-dom";

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", showCommentControls: false };

    this.toggleCommentControls = this.toggleCommentControls.bind(this);
    this.calcTextareaHeight = this.calcTextareaHeight.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.cancelComment = this.cancelComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleCommentControls(event) {
    if (this.state.showCommentControls) {
      if (!this.state.body) {
        this.setState({ showCommentControls: false });
        // calls instance method on comment.jsx
        if (this.props.hideCreateReply) this.props.hideCreateReply();
      }
    } else {
      this.setState({ showCommentControls: true });
    }
  }

  calcTextareaHeight() {
    const textareaEle = document.getElementById("comment-create-textarea");
    textareaEle.style.height = "";
    textareaEle.style.height = `${textareaEle.scrollHeight}px`;
  }

  handleInput(event) {
    this.setState({ body: event.target.value });
    this.calcTextareaHeight();
  }

  cancelComment(event) {
    event.preventDefault();
    this.setState({ body: "", showCommentControls: false });
        // calls instance method on comment.jsx
    if (this.props.hideCreateReply) this.props.hideCreateReply();
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = { body: this.state.body, postId: this.props.match.params.postId, parent_id: this.props.parentId };
    this.props.createComment(comment);
    this.setState({ body: "", showCommentControls: false });
    // calls instance method on comment.jsx
    if (this.props.hideCreateReply) this.props.hideCreateReply();
  }

  render() {
    const commentControls = this.state.showCommentControls ? (
      <div className="comment-create-controls">
        <button className="comment-create-cancel" onClick={this.cancelComment}>Cancel</button>
        <button className="comment-create-submit" disabled={!this.state.body} onClick={this.handleSubmit}>Comment</button>
      </div>
    ) : null;

    return (
      <div className="comment-create-container">
        <div className="comment-avatar">
          {/* avatar */}
        </div>
        <div className="comment-create-input">
          <textarea 
            id="comment-create-textarea"
            placeholder="Add a comment" 
            value={this.state.body} 
            onChange={this.handleInput} 
            onFocus={this.toggleCommentControls}
            onBlur={this.toggleCommentControls}
            autoFocus={this.props.focus}
          />
          <div className="comment-create-icon-container"><i className="far fa-comment"></i></div>
        </div>
        { commentControls }
      </div>
    );
  }
}

export default withRouter(CreateComment);