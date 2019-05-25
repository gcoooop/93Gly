import React from "react";
import { withRouter } from "react-router-dom";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateFileInput = this.updateFileInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(this.state);
  }

  updateInput(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  updateFileInput(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => 
      this.setState({ imageUrl: reader.result, imageFile: file });
    
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  render() {
    return (
      <form>
        <img src={this.state.imageUrl}/>
        <label>Title</label>
        <input type="text" value={this.state.title} onChange={this.updateInput("title")}/>
        <label>Caption</label>
        <input type="text" value={this.state.caption} onChange={this.updateInput("caption")}/>
        <label>File</label>
        <input type="file" onChange={this.updateFileInput}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default withRouter(PostForm);