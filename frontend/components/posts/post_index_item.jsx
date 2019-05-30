import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentWillUnmount() {
    clearInterval(this.loadedTimer);
  }

  loadedTimer(img) {
    setInterval( () => {
      if (this.state.loaded) {
        clearInterval(this.loadedTimer);
        return; 
      }
      if (img.complete) this.setState({ loaded: true });
    }, 200);
  }

  render()  {
    const img = new Image();
    img.src = this.props.post.photoUrl;

    this.loadedTimer(img);

    const imgW = img.width;
    const imgH = img.height; 
    const calcW = 300 * imgW / imgH;
    const styles = {
      backgroundImage: `url(${this.props.post.photoUrl})`,
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: `${calcW}px`,
    };
    if (this.state) {
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