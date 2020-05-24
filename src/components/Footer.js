import React from "react";
import twitter from "./images/outline -Twitter.png";
import facebook from "./images/outline -Facebook.png";
import dribble from "./images/outline - Dribbble.png";
export default () => {
  return (
    <div className='footer'>
      <h1>LOCO</h1>
      <div>
        <p>HOME</p>
        <p>LANDING</p>
        <p>REGISTER</p>
        <p>PROFILE</p>
      </div>
      <div>
        <p>CONTACT US</p>
        <p>ABOUT US</p>
        <p>BLOG</p>
        <p>LICENSE</p>
      </div>
      <div>
        <h2 className='mb-4'>Follow Us:</h2>
        <div>
          <img src={twitter} alt='twitter' />
          <img src={dribble} alt='dribble' className='ml-2' />
          <img src={facebook} alt='facebook' className='ml-2' />
        </div>
      </div>
    </div>
  );
};
