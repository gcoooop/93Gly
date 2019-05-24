import React from "react";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postIndexItems = this.props.posts.map( post => <PostIndexItem key={post.id} post={post} />);
    return (
      <div className="posts-grid">
        {postIndexItems}
      </div>
    );
  }
} 

export default PostIndex;