import React from "react";
import { Link } from "react-router-dom";

const Splash = props => {

  return (
    <div className="splash">
      <div className="splash-slider">

        <div className="splash-slider-image">
          <img/>
          <a>"Crab Nebula (M1) Mosaic" by NASA</a>
        </div>

        <div className="splash-slider-caption">
          <h3>The universal network for astrophotographers</h3>
          <h1>Discover and share the universe's best photos</h1>
          <p>Get inspired with incredible photos of celestial bodies across the universe. We're not guided by fads - just the stars.</p>
          <Link to="/signup">Sign up</Link>
        </div>

      </div>
    </div>
  );
};

export default Splash;