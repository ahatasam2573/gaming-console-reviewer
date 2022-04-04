import React from 'react';
import { PieChart, Pie } from 'recharts';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import {
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import './Dashboard.css'

const DashBoardDetail = () => {
  const data = [
    {
      "month": "Mar",
      "investment": 100000,
      "sell": 241,
      "revenue": 10401
    },
    {
      "month": "Apr",
      "investment": 200000,
      "sell": 423,
      "revenue": 24500
    },
    {
      "month": "May",
      "investment": 500000,
      "sell": 726,
      "revenue": 67010
    },
    {
      "month": "Jun",
      "investment": 500000,
      "sell": 529,
      "revenue": 40405
    },
    {
      "month": "Jul",
      "investment": 600000,
      "sell": 601,
      "revenue": 50900
    },
    {
      "month": "Aug",
      "investment": 700000,
      "sell": 670,
      "revenue": 61000
    }
  ]
  return (
    <div className='chart-div'>
      <LineChart width={500} height={300} data={data}>
        <Line dataKey={'sell'}></Line>
        <Line dataKey={'revenue'}></Line>
        <XAxis dataKey={'month'}></XAxis>
        <YAxis dataKey={'investment'}></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
      <PieChart width={500} height={600}>
        <Pie
          data={data}
          dataKey="sell"
          cx={200}
          cy={200}
          outerRadius={100}
          fill="#8884d8"
        />
        <Pie
          data={data}
          dataKey="investment"
          cx={200}
          cy={200}
          innerRadius={80}
          outerRadius={100}
          fill="#82ca9d"
          label
        />
        <Tooltip></Tooltip>
      </PieChart>

      <AreaChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div >


  );
};

export default DashBoardDetail;
