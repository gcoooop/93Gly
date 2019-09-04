import React from "react";
import LikeIndexItem from "./like_index_item";

const LikeIndex = props => {
  const likeLis = props.likes.map( like => <LikeIndexItem key={like.id} like={like} />)  

  return (
    <div className="like-index-container">
      <div className="like-index-header-container">
        <div className="like-index-header">
          <span className="like-index-header-title">Likes</span>
          <span className="like-index-header-count">&nbsp;•&nbsp;{props.likes.length}</span>
        </div>
        <a className="like-index-close" onClick={props.closeModal}>&times;</a>
      </div>
      <ul className="like-index-list">
        { likeLis }
      </ul>
    </div>
  );
};

export default LikeIndex;