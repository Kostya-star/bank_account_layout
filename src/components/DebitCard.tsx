import React, { useState } from 'react';
import { Button } from './UI/Button/Button';
import { ReactComponent as ArrowLeftSVG } from 'assets/arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from 'assets/arrow-right.svg';
// import Svg from '../assets/debit-card.svg'
import { ReactComponent as CardImageSVG } from 'assets/debit-card.svg';

const svgs = [<ArrowLeftSVG />, <ArrowRightSVG />];

export const DebitCard = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div className="card">
      <div className="card__top">
        <div className="card__heading">
          <h3>Wallet</h3>
          <span>Cards | 1 out of 4</span>
        </div>
        <div className="card__buttons">
          {svgs.map((svg, ind) => {
            return (
              <button
                key={ind}
                className={activeBtn === ind ? 'card__buttons--active' : ''}
                onClick={() => setActiveBtn(ind)}
              >
                {svg}
              </button>
            );
          })}
        </div>
      </div>
      <div className="card__content">
        <div className="card__img">
            {/* <img src={Svg} alt="" width='200' height='200'/> */}
          <CardImageSVG />
        </div>
        <div className="card__info">
            <span className='card__balance-title'>Balance</span>
            <span className='card__balance-sum'>$14,528,00</span>
            <span className='card__currency-title'>Currency</span>
            <span className='card__currency-type'>US Dollar</span>
            <span className='card__deactivate'>Deactivate card</span>
            <button>switcher</button>
        </div>
      </div>
    </div>
  );
};
