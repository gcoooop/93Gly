import React from "react";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postIndexItems = this.props.posts.map( post => <PostIndexItem key={post.id} post={post} />);
    return (
      <div className="post-index">
        <div className="post-index-header">
          <h1>What's popular today on Earth</h1>
          <p>See recently added photos</p>
        </div>
        <div className="posts-grid">
          {postIndexItems}
        </div>
      </div>
    );
  }
} 

export default PostIndex;