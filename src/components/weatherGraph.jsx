import React from 'react';
import {
  LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis,
} from 'recharts';
import { useSelector } from 'react-redux';

const WeatherGraph = () => {
  const weather = useSelector((state) => state.weather.value);
  // const weatherData = weather.map((entry) => (entry.temperatureinCelsius));

  return (
    <ResponsiveContainer width='100%' aspect={3}>
      <LineChart width={50} height={50} margin={5} data={weather}>
        <Line type="monotone" dataKey="temperatureinCelsius" stroke="#8884d8" />;
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherGraph;
