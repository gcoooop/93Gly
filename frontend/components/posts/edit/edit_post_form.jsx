import React from "react";
import EditPostItem from "./edit_post_item";

class EditPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null, title: "", caption: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(this.state);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deletePost(this.state.id);
    this.setState({ id: null, title: "", caption: "" });
  }

  updateInput(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  updateSelection(post) {
    return event => {
      if (this.state.id === post.id) {
        this.setState({ id: null, title: "", caption: "" });
      } else {
        this.setState( post );
      }
    };
  }

  render() {
    const editPostItems = this.props.posts.map( post => 
      <EditPostItem 
        key={post.id}
        post={post} 
        selected={ post.id === this.state.id ? "selected" : ""} 
        updateSelection={this.updateSelection(post)}
      /> 
    );
    return (
      <div className="post-editor">
        <div className="manage-pane-middle">
          <h2>Public <span>{editPostItems.length} Photos</span></h2>
          <div className="posts-grid">
            {editPostItems}
          </div>
        </div>
        <div className="form-wrapper manage-pane-right">
          <form className="post-form">
            <label>Title</label>
            <input type="text" value={this.state.title} onChange={this.updateInput("title")}/>
            <label>Caption</label>
            <input type="text" value={this.state.caption} onChange={this.updateInput("caption")}/>
            <button onClick={this.handleSubmit}>Submit</button>
            <button onClick={this.handleDelete}>Delete Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPostForm;