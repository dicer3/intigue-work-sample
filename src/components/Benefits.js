import React, { Fragment } from "react";
import moneycoins from "./images/Money-coins.png";
import pie from "./images/Chart pie.png";
import single from "./images/Single.png";
export default () => {
  return (
    <Fragment>
      <div className='benefits'>
        <h1>Your Best Benefit</h1>
        <div className='row'>
          <div className='col-md-4 '>
            <img src={moneycoins} alt='moneycoins' />
            <h3>Low Commision</h3>
            <hr className='first-line' />
            <div class='des-text'>
              Divide details about your work into parts. Write a few lines about
              each one. A paragraph describing a feature will.
            </div>
          </div>
          <div className='col-md-4 mt-4 mt-md-0'>
            <img src={pie} alt='pie' />
            <h3>High Incomes</h3>
            <hr className='second-line' />
            <div class='des-text'>
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing feature will be
              a feature.
            </div>
          </div>
          <div className='col-md-4 mt-4 mt-md-0'>
            <img src={single} alt='moneycoins' />
            <h3>Verified People</h3>
            <hr className='third-line' />
            <div class='des-text'>
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing be enough.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
