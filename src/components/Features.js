import React, { Fragment } from "react";
import features from "./images/features Image.png";

export default () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-6'>
          <div className='collage'>
            <div className='outer-box'>
              <div className='success-box'>
                <div className='percent'>100%</div>
                <div>Safe</div>
              </div>
            </div>
            <div className='customers-box'>
              <div className='percent'>573 K </div>
              <div>Satisfied Customers</div>
            </div>
            <div className='feature-image'>
              <img src={features} alt='' />
            </div>
          </div>
          <div className='outer-buissness-box'>
            <div className='buisness-box'>
              <div className='percent'>10 425 </div>
              <div>Buissness</div>
            </div>
          </div>
        </div>
        <div className='col-md-6 feature-list'>
          <hr className='extended-third-line' />
          <h3>Awesome Features</h3>
          <div>
            The design system comes with three pre-built pages to help you get
            started faster. You can change the text and images and you're good
            to go.
          </div>
          <div>
            <p>CAREFULLY CRAFTED COMPONENTS</p>
            <p>AMAZING PAGE EXAMPLES</p>
            <p>SUPER FRIENDLY SUPPORT TEAM</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
