import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Dot
} from 'recharts';

const data = [
  { day: '8/04', 'Money Income': 0 },
  { day: '9/04', 'Money Income': 12000 },
  { day: '10/04', 'Money Income': 6000 },
  { day: '11/04', 'Money Income': 20000 },
  { day: '12/04', 'Money Income': 12000 },
  { day: '13/04', 'Money Income': 33000 },
  { day: '14/04', 'Money Income': 8000 },
  { day: '', 'Money Income': 20000 },
];

const CustomDot = (props: any) => {
    const { cx, cy, stroke, payload } = props;
    const { value } = payload;

    return (
      <g>
        <Dot cx={cx} cy={cy} r={6} fill={stroke} />
        <Tooltip
          content={
            <div className="tooltip-content">
              <div className="tooltip-value">{`$${value}`}</div>
            </div>
          }
          wrapperStyle={{ zIndex: 100 }}
          cursor={{ stroke: '#8884d8', strokeWidth: 1 }}
        />
      </g>
    );
  };

export const Chart = () => {
  return (
    <LineChart width={560} height={200} data={data}>
      <Line
        type="monotone"
        dataKey="Money Income"
        stroke="#5F1ED9"
        strokeWidth={2}
        activeDot={{ r: 9 }}
        dot={<CustomDot />}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="day" />
      <YAxis
        domain={[0, 40000]}
        tickFormatter={(value) => `${value / 1000}K`}
        axisLine={false}
        tick={{ fontSize: 14 }}
      />
      <Tooltip
      />
      <Legend />
    </LineChart>
  );
};
