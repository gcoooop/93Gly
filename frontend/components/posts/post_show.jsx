import React from "react";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId)
      .then( post => this.setState({ post }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.postId != this.props.match.params.postId) {
      this.props.fetchPost(this.props.match.params.postId);
    }
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }
    
    return (
      <div className="show-page">
        <div className="photo-container">
          <div className="photo-wrapper">
            <img src={post.photoUrl}/>
          </div>
        </div>
        <div className="post-details">
          {post.title}
          {post.caption}
        </div>
      </div>
    );
  }
} 

export default PostShow;