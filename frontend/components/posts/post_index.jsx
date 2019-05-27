import React from "react";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSelected = this.toggleSelected.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchPosts();
  }

  toggleSelected(postId) {
    return (event) => {
      this.props.toggleSelectedExisting(postId);
    };
  }

  render() {
    const postIndexItems = this.props.posts.map( post => 
      <PostIndexItem 
        key={post.id} 
        post={post} 
        toggleSelected={this.toggleSelected(post.id)} 
        selected={ this.props.selectedNewPosts.includes(post.id) ? "selected" : "" }
      />);
    return (
      <section className="posts-grid">
        {postIndexItems}
      </section>
    );
  }
} 

export default PostIndex;