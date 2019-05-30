import React from "react";

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId)
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
        <div className="details-container">
          <div className="details-container-left">
            <div className="post-buttons">
              {/* like share more buttons */}
            </div>
            <div className="post-details">
              {post.title}
              {/* photograher name */}
              {post.caption}
            </div>
          </div>
          <div className="details-container-right">
            <div className="comments">
              {/* comments section */}
            </div>
          </div>
        </div>
      </div>
    );
  }
} 

export default PostShow;