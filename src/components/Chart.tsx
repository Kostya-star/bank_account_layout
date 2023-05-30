import React, { useState } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Dot,
} from 'recharts';

const data = [
  { day: '8/04', 'Money Income': 0 },
  { day: '9/04', 'Money Income': 12000 },
  { day: '10/04', 'Money Income': 6000 },
  { day: '11/04', 'Money Income': 20000 },
  { day: '12/04', 'Money Income': 12000 },
  { day: '13/04', 'Money Income': 33000 },
  { day: '14/04', 'Money Income': 8000 },
  { day: '', 'Money Income': 22000 },
];

const CustomTooltip = (props: any) => {
  return <div className="chart__tooltip">items: {props.payload.length}</div>;
};

const CustomDot = (props: any) => {
  const { cx, cy, stroke } = props;

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={8}
        fill="black"
        stroke={stroke}
        strokeWidth={1}
      />
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill="black"
        stroke={stroke}
        strokeWidth={2}
        style={{ filter: 'drop-shadow(0 0 2px black)' }}
      />
    </g>
  );
};

const chartTopBarList = ['1D', '1W', '1M', '6M', '1Y'];

export const Chart = () => {
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

      <LineChart width={540} height={200} data={data}>
        <Line
          type="monotone"
          dataKey="Money Income"
          stroke="#5F1ED9"
          strokeWidth={2}
          dot={false}
          activeDot={<CustomDot />}
        />
        <CartesianGrid stroke="#ccc" vertical={false} strokeDasharray="5 5" />

        <XAxis dataKey="day" axisLine={false} tickMargin={10} />
        <YAxis
          domain={[0, 40000]}
          tickFormatter={(value) => `${value / 1000}K`}
          axisLine={false}
          tick={{ fontSize: 14 }}
          tickMargin={10}
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>

      <div className="chart__footer">
        <span className="chart__footer__income">Money Income</span>
        <span className="chart__footer__current">Current State</span>
      </div>
    </div>
  );
};
