"use client";

import React from "react";
import { FiUser } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    sales: 4000,
    purchase: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    sales: 3000,
    purchase: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    sales: 2000,
    purchase: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    sales: 2780,
    purchase: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    sales: 1890,
    purchase: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    sales: 2390,
    purchase: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    sales: 3490,
    purchase: 4300,
    amt: 2100,
  },
];

const ActivityGraph:React.FC = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-small">
          <FiUser /> Activity
        </h3>
      </div>
      <div className="h-64 px-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="purchase"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityGraph;
