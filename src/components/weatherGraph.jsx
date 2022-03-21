import React from 'react';
import {
  LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend,
} from 'recharts';
import { useSelector } from 'react-redux';

const WeatherGraph = () => {
  const weather = useSelector((state) => state.weather.value);

  return (
    <ResponsiveContainer width='100%' aspect={3}>
      <LineChart width={50} height={50} margin={{ top: 50 }} data={weather}>
        <Legend verticalAlign="bottom" height={36} />
        <Line name='Temperature In Celsius' type="monotone" dataKey="temperatureinCelsius" stroke="#8884d8" />;
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherGraph;
