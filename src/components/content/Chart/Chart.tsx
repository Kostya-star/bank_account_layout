import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
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

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { value } = payload[0];
    return <div className="chart__tooltip">${value}</div>;
  }

  return null;
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
      />
    </g>
  );
};

export const Chart = () => {
  return (
    <ResponsiveContainer width='100%' height={200}>
      <LineChart data={data}> 
        <Line
          type="monotone"
          dataKey="Money Income"
          stroke="#5F1ED9"
          strokeWidth={2}
          dot={false}
          activeDot={<CustomDot />}
        />
        <CartesianGrid stroke="#ccc" vertical={false} strokeDasharray="5 5" />

        <XAxis
          dataKey="day"
          axisLine={false}
          tickMargin={10}
          tick={{ fontSize: 14 }}
        />
        <YAxis
          domain={[0, 40000]}
          tickFormatter={(value) => `${value / 1000}K`}
          axisLine={false}
          tick={{ fontSize: 14 }}
          tickMargin={10}
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};
