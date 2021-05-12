import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  linearGradient,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

export default function AreaComp({
  title,
  xAxisKey,
  dataKey,
  hex,
  serie,
  height,
  id,
  noDecimals,
}) {
  return (
    <section style={{ marginTop: "30px !important" }}>
      <h2>{title}</h2>

      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={serie.data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={hex} stopOpacity={0.8} />
              <stop offset="95%" stopColor={hex} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={xAxisKey} />
          <YAxis allowDecimals={noDecimals ? false : true} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={hex}
            fillOpacity={1}
            fill={`url(#${id})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}
