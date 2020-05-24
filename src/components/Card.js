import React from "react";
import profileImage from "./images/Profile bg Image.png";
import cardMiddle from "./images/Image.png";
import dribble from "./images/Dribble.png";
import linkedin from "./images/linkedin.png";
import behance from "./images/behance.png";

export default () => {
  return (
    <div>
      <div className='own-card'>
        <div className='overlap-card-images'>
          <img src={profileImage} className='profileImage' alt='' />
          <div className='postion-card-img d-lg-block d-none'>
            <img src={cardMiddle} className='cardMiddle ' alt='' />
          </div>
        </div>
        <div className='own-card-content'>
          <div className='own-card-title'>Melanie Paisley</div>
          <div className='text-muted'>
            Over the years, advancement in CRM technology has reshaped the way
            SMBs and SMEs manage their workflows...
          </div>
          <div className='own-card-footer'>
            <button className='followButton'>Follow</button>
            <div className='contacts'>
              <img src={dribble} alt='dribble' />
              <img src={linkedin} alt='linkedin' />
              <img src={behance} alt='behance' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
