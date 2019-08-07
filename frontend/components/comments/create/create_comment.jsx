import React from "react";

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };

    this.handleInput = this.handleInput.bind(this);
    this.cancelComment = this.cancelComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {

  }

  cancelComment(event) {
    
  }

  handleSubmit(event) {

  }

  render() {
    const commentControls = this.state.body ? (
      <div className="comment-create-controls">
        <button className="create-comment-cancel" onCLick={this.cancelComment}>Cancel</button>
        <button className="create-comment-submit" onClick={this.handleSubmit}>Comment</button>
      </div>
    ) : null;

    return (
      <div className="comment-create-container">
        <div className="comment-avatar">
          {/* avatar */}
        </div>
        <div className="comment-create-input">
          <textarea placeholder="Add a comment" value={this.state.body} onChange={this.handleInput}/>
          <div><i className="far fa-comment"></i></div>
        </div>
        { commentControls }
      </div>
    );
  }
}

export default CreateComment;