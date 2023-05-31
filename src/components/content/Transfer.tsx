import { useEffect, useRef, useState } from 'react';
import { TransferOption } from './TransferOption/TransferOption';
import { ReactComponent as VisaCardSVG } from 'assets/card-visa.svg';
import { ReactComponent as MasterCardSVG } from 'assets/card-master.svg';
import { ReactComponent as TransferPercentageSVG } from 'assets/transfer-percentage.svg';
import { ReactComponent as TransferArrowRightSVG } from 'assets/arrow-right-tail.svg';
import { ReactComponent as ArrowLeftSVG } from 'assets/arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from 'assets/arrow-right.svg';
import { Input } from 'components/UI/Input/Input';
import { Button } from 'components/UI/Button/Button';

const transferOptions = [
  { svg: <VisaCardSVG />, type: '3149 Debit card', currency: '2895.15 USD' },
  { svg: <MasterCardSVG />, type: '1245 Debit card', currency: '2345.15 USD' },
  { svg: <MasterCardSVG />, type: '1122 Debit card', currency: '1235.15 USD' },
  { svg: <VisaCardSVG />, type: '1322 Debit card', currency: '835.15 USD' },
];

export const Transfer = () => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = optionsRef.current?.scrollLeft;
      const scrollWidth = optionsRef.current?.scrollWidth;
      const clientWidth = optionsRef.current?.clientWidth;

      if (scrollLeft && clientWidth && scrollWidth) {
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft + clientWidth + 10 < scrollWidth);
      }
    };
    optionsRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      optionsRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onOptionsScroll = (direction: string) => {
    optionsRef.current?.scrollBy({
      left: direction === 'left' ? -200 : 200,
      behavior: 'smooth',
    });
  };

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
        <div className="transfer__options__wrapper" ref={optionsRef}>
          {transferOptions.map((option, ind) => {
            return <TransferOption key={ind} {...option} />;
          })}
        </div>
        <button
          className={`transfer__scroll-left ${
            canScrollLeft ? 'visible' : 'hidden'
          }`}
          onClick={() => onOptionsScroll('left')}
        >
          <ArrowLeftSVG/>
        </button>
        <button
          className={`transfer__scroll-right ${
            canScrollRight ? 'visible' : 'hidden'
          }`}
          onClick={() => onOptionsScroll('right')}
          >
          <ArrowRightSVG/>
        </button>
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
