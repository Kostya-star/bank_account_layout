import React, { useState } from 'react';
import { Chart } from './Chart';

const chartTopBarList = ['1D', '1W', '1M', '6M', '1Y'];

export const ChartWrapper = () => {
  const [activeDate, setActiveDate] = useState(0);
  return (
    <div className="chart">
      <div className="chart__header">
        <h3>Statistics</h3>
        <ul className="chart__top-bar">
          {chartTopBarList.map((item, ind) => {
            return (
              <li
                key={ind}
                className={activeDate === ind ? 'active' : ''}
                onClick={() => setActiveDate(ind)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      
      <Chart />

      <div className="chart__footer">
        <span className="chart__footer__income">Money Income</span>
        <span className="chart__footer__current">Current State</span>
      </div>
    </div>
  );
};
