import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import colors from "../../colors";
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
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF8042",
  "#FF8042",
  "#FF8042",
  "#FF8042",
  "#FF8042",
];

const renderLegend = (props) => {
  const { payload } = props;
  // console.log("payload", payload);
  return (
    <ul
      style={{
        listStyleType: "none",
        display: "flex",
        flexDirection: "column",
        padding: 0,
        width: "fit-content",
        margin: "auto",
      }}
    >
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            marginBottom: 3,
            width: "fit-content",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              height=".8rem"
              width=".8rem"
              borderRadius={"100%"}
              bgcolor={entry.color}
            ></Box>
            <Typography variant="caption">{entry.value}</Typography>
            <Typography
              variant="caption"
              px={0.5}
              bgcolor={colors.yellow.v1}
              fontWeight={500}
              borderRadius={1}
            >
              {`${Math.round(entry.payload?.percent * 100)}%`}
            </Typography>
            <Typography
              variant="caption"
              px={0.5}
              bgcolor={colors.yellow.v1}
              fontWeight={500}
              borderRadius={1}
            >
              {`${entry.payload.value} BNB`}
            </Typography>
          </Stack>
        </li>
      ))}
    </ul>
  );
};

export default function ThePieChart({ data1 = [] }) {
  return (
    <StyledPaper sx={{ p: 2, mt: 2 }}>
      <Typography align="center" variant="h6">
        Funding Allocation
      </Typography>
      <ResponsiveContainer width="100%" height={300 + data.length * 25}>
        <PieChart width={800} height={"100%"}>
          <Pie
            isAnimationActive={false}
            data={data1.map(({ name, value }) => ({
              name,
              value: Number(value),
            }))}
            label={renderCustomizedLabel}
            labelLine={false}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {React.Children.toArray(
              data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))
            )}
          </Pie>
          <Legend content={renderLegend} />
        </PieChart>
      </ResponsiveContainer>
    </StyledPaper>
  );
}
