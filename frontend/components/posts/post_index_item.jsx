import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.img = new Image();
    this.img.src = props.post.photoUrl;

    this.loadedTimer();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  loadedTimer() {
    this.interval = setInterval( () => {
      if (this.img.complete) {
        this.setState({ loaded: true });
        clearInterval(this.interval);
        return; 
      }
    }, 1000);
  }

  render()  {
    const imgW = this.img.width;
    const imgH = this.img.height; 
    const calcW = 300 * imgW / imgH;
    const styles = {
      backgroundImage: `url(${this.props.post.photoUrl})`,
      flex: `1 0 ${calcW}px`
    };
    if (this.state.loaded) {
      return (
        <div className="post-grid-item" style={ styles }>
          <Link to={`/posts/${this.props.post.id}`}></Link>
          <div className="item-top item-info"></div>
          <div className="item-bottom item-info"></div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PostIndexItem;