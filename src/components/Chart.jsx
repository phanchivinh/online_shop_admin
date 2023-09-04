import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className='m-5 p-5 shadow-lg shadow-blue-300'>
      {/* Chart Title */}
      <h3 className='mb-5 font-bold'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="sale_date" stroke='#5550bd' />
          <Line dataKey={dataKey} type="monotone" stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
