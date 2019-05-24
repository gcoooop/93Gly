import React from "react";

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
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
      <div>
        {/* wrap in figure with fig caption */}
        {post.title}
        {post.caption}
      </div>
    );
  }
} 

export default PostShow;