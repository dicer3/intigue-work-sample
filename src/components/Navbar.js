import React, { Fragment } from "react";
import bookmark from "./images/bookmark.png";
import paper from "./images/paper.png";

export default () => {
  return (
    <Fragment>
      <div className='firstRow'>
        <h4 className='text-white'>Logo</h4>
        <div>
          <span>Getting Started</span>
          <span>
            <img src={paper} className='d-none d-md-inline' /> Sections
          </span>
          <span>
            <img src={bookmark} className='d-none d-md-inline' /> Examples
          </span>
          <span>
            <button className='buy-now-button'>Buy Now</button>
          </span>
        </div>
      </div>
    </Fragment>
  );
};
