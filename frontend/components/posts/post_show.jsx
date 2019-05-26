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
      <div>
        <figure>
          <img src={post.photoUrl}/>
        </figure>
        {post.title}
        {post.caption}
      </div>
    );
  }
} 

export default PostShow;