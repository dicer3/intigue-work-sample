import React, { Fragment } from "react";
import coin from "./images/Image-Top-section.png";
import twitter from "./images/outline -Twitter.png";
import facebook from "./images/outline -Facebook.png";
import dribble from "./images/outline - Dribbble.png";
export default () => {
  return (
    <Fragment>
      <div className='row heading'>
        <div className='col-md-8 first-heading'>
          <div class='inner-box'>
            <div>
              <h2>We keep your coin secured</h2>
            </div>
            <div>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel...
            </div>
            <div className='green-line'>From 9.99%/Mo</div>
            <div>
              <img src={twitter} alt='twitter' />
              <img src={dribble} alt='dribble' />
              <img src={facebook} alt='facebook' />
            </div>
          </div>
        </div>
        <div className='d-none d-md-block col-md-4'>
          <img src={coin} alt='cover-coin' />
        </div>
      </div>
    </Fragment>
  );
};
