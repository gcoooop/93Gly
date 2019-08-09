import React from "react";
import { Link } from "react-router-dom";
import CommentContainer from "../comments/comment_container";
import CreateCommentContainer from "../comments/create/create_comment_container";

class PostShow extends React.Component {
  componentDidMount() {
    const postId = this.props.match.params.postId;
    this.props.fetchCommentsByPostId(postId);
    this.props.fetchPost(postId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.postId != this.props.match.params.postId) {
      this.props.fetchPost(this.props.match.params.postId);
    }
  }

  render() {
    const { post, photographer, comments, loggedIn } = this.props;
    if (!post || !photographer) {
      return <div className="loading">Loading...</div>;
    }

    // commentLis are created in a try-catch block because the component is rendered
    // before the response returns from the backend with the comments and users info.
    // when the Comment "key" prop is created, it tries to read comment.id of undefined
    // which results in an error
    let commentLis
    try {
      commentLis = comments.reverse().map( comment => <CommentContainer key={comment.id} comment={comment} /> );
    } catch (error) {
      // doesnt need to do anything
      // console.log(error)
    }

    const createCommentEle = loggedIn ? <CreateCommentContainer postId={this.props.match.params.postId}/> : null;

    return (
      <div className="show-page">
        <div className="photo-container">
          <Link to="/">&times;</Link>
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
              <div className="post-details-header">
                <h3>{post.title}</h3>
                <span>by {photographer.username}</span>
                {/* username should be a link to profile when that feature is implemented */}
              </div>
              <div className="post-details-info">
                <span>{post.caption}</span>
              </div>
            </div>
          </div>
          <div className="details-container-right">
            <div className="comments">
              <h4 className="comments-header">{`${comments.length} Comments`}</h4>
              { createCommentEle }
              <ul className="comments-list">
                { commentLis }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
} 

export default PostShow;