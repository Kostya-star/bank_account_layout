import React from 'react';
import { TransferOption } from './TransferOption/TransferOption';
import { ReactComponent as VisaCardSVG } from 'assets/card-visa.svg';
import { ReactComponent as MasterCardSVG } from 'assets/card-master.svg';
import { ReactComponent as TransferPercentageSVG } from 'assets/transfer-percentage.svg';
import { ReactComponent as TransferArrowRightSVG } from 'assets/arrow-right-tail.svg';
import { Input } from 'components/UI/Input/Input';
import { Button } from 'components/UI/Button/Button';

const transferOptions = [
  { svg: <VisaCardSVG />, type: '3149 Debit card', currency: '2895.15 USD' },
  { svg: <MasterCardSVG />, type: 'Debit card...', currency: 'EUROPIAN...' },
];

export const Transfer = () => {
  return (
    <div className="transfer">
      <div className="transfer__top">
        <div className="transfer__heading">
          <h3>Quick Transfer</h3>
          <span>Mobile top-up</span>
        </div>
        <a href="#">See all</a>
      </div>

      <div className="transfer__options">
        {transferOptions.map((option, ind) => {
          return <TransferOption key={ind} {...option} />;
        })}
      </div>

      <div className="transfer__inputs">
        <p className="transfer__card-input">
          <Input type="text" placeholder="Card or phone" />
        </p>
        <p className="transfer__money-input">
          <Input type="text" placeholder="Preferred amount" />
          <span>USD</span>
        </p>
      </div>

      <div className="transfer__proceed">
        <TransferPercentageSVG />
        <Button>
          Get Started
          <TransferArrowRightSVG />
        </Button>
      </div>

      <div className="transfer__footer">
        <h5>Create a new deposit!</h5>
        <p>
          Choose a flexible deposit for your savings suited to your needs in
          InvestBank
        </p>
      </div>
    </div>
  );
};
