import { Transaction } from './Transaction/Transaction';
import { ReactComponent as NetflixSVG } from 'assets/netflix.svg';
import { ReactComponent as SpotifySVG } from 'assets/spotify.svg';
import { ReactComponent as FigmaSVG } from 'assets/figma.svg';
import { ReactComponent as ShopifySVG } from 'assets/shopify.svg';
import { Fragment } from 'react';

const transactions = [
  {
    svg: <NetflixSVG />,
    product: 'Netflix',
    date: 'Apr 05 2023 at 21:46',
    totalSum: 15.49,
  },
  {
    svg: <SpotifySVG />,
    product: 'Spotify',
    date: 'Mar 14, 2023 at 08:10',
    totalSum: 135.49,
    incoming: true,
  },
  {
    svg: <FigmaSVG />,
    product: 'Figma',
    date: 'Feb 20, 2023 at 19:24',
    totalSum: 75.0,
  },
  {
    svg: <ShopifySVG />,
    product: 'Shopify',
    date: 'Jan 07, 2023 at 06:58',
    totalSum: 934.29,
    incoming: true,
  },
];

export const Transactions = () => {
  return (
    <div className="transactions">
      <div className="transactions__top">
        <div className="transactions__heading">
          <h3>Transactions</h3>
          <span>Upcoming Bills</span>
        </div>
        <a href="#">View all</a>
      </div>

      <div className="transactions__list">
        {transactions.map((transaction, ind) => {
          const lastInd = transactions.length - 1;

          return (
            <Fragment key={ind}>
              <Transaction key={ind} {...transaction} />
              {ind !== lastInd ? <hr /> : null}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
