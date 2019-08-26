import React from "react";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };

    this.toggleLike = this.toggleLike.bind(this);
  }

  componentDidMount() {
    this.props.fetchLikesByPostId(this.props.postId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUserLike != this.props.currentUserLike) {
      this.setState({ isLiked: !!this.props.currentUserLike });
    }
  }

  toggleLike(event) {
    if (this.state.isLiked) {
      this.props.deleteLike(this.props.currentUserLike);
      this.setState({ isLiked: false });
    } else {
      this.props.createLike({ post_id: this.props.postId });
      this.setState({ isLiked: true });
    }
  }

  render() {
    return (
      <div className="likes-container">
        <div className="likes-button" onClick={this.toggleLike}>
          {this.state.isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i> }
        </div>
        <span className="likes-count">{this.props.likes.length}</span>
      </div>
    );
  }
}

export default Like;