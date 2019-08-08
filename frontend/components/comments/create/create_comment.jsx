import React from "react";

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
      if (!this.state.body){
        this.setState({ showCommentControls: false });
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
    this.setState({ body: "" });
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = { body: this.state.body, postId: this.props.postId };
    this.props.createComment(comment);
    this.setState({ body: "", showCommentControls: false });
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
          />
          <div className="comment-create-icon-container"><i className="far fa-comment"></i></div>
        </div>
        { commentControls }
      </div>
    );
  }
}

export default CreateComment;