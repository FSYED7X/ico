import { Typography } from "@mui/material";
import React from "react";
import {
    Cell, Legend, Pie, PieChart, ResponsiveContainer
} from "recharts";
import { StyledPaper } from "../../styled";
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const data = [
  { name: "Funding 1", value: 400 },
  { name: "Funding 2", value: 300 },
  { name: "Funding 3", value: 300 },
  { name: "Funding 4", value: 200 },
  { name: "Funding 5", value: 300 },
  { name: "Funding 6", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function ThePieChart() {
  return (
    <StyledPaper sx={{ p: 2, mt: 2 }}>
      <Typography align="center" variant="h6">
        Funding Allocation
      </Typography>
      <ResponsiveContainer width="100%" height={300 + data.length * 18}>
        <PieChart width={800} height={"100%"}>
          <Pie
            data={data}
            label={renderCustomizedLabel}
            labelLine={false}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend align="center" />
        </PieChart>
      </ResponsiveContainer>
    </StyledPaper>
  );
}
