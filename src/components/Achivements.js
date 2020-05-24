import React, { Fragment } from "react";
import trophy from "./images/Trophy.png";
import coins from "./images/coin.png";
import gift from "./images/gift.png";
import card from "./images/card.png";
export default () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-5 boxes-outer'>
          <div>
            <div>
              <img src={trophy} alt='coins' />
              <div class='atom'>
                <h3 className='number-awards'>3237</h3>
                <div className='awards'>Awards</div>
              </div>
            </div>
          </div>

          <div className='big-card'>
            <div>
              <img src={coins} alt='coins' />
              <div class='atom'>
                <h3 className='number-awards'>3653</h3>
                <div className='awards'>Commits</div>
              </div>
            </div>
          </div>
          <span className='line-break'></span>
          <div>
            <div>
              <img src={gift} alt='coins' />
              <div class='atom'>
                <h3 className='number-awards'>593</h3>
                <div className='awards'>Presents</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={card} alt='coins' />
              <div class='atom'>
                <h3 className='number-awards'>1078</h3>
                <div className='awards'>Forks</div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-7 mt-4 mt-md-0 text-white achivements-thoery'>
          <h2>Large Achivements</h2>
          <div>
            I should be capable of drawing a single stroke at the present
            moment; and yet I feel that I never was a greater artist than now.
          </div>
          <div>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray.
          </div>
          <h6 className='text-primary'>Show all > </h6>
        </div>
      </div>
    </Fragment>
  );
};
