import React from 'react';
import { LineChart, Line } from 'recharts';

const graphWeather = () => {
  <LineChart width={400} height={400} data={WeatherDataList}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />;
  </LineChart>
};

export default graphWeather