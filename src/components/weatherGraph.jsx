// import React, { useState } from 'react';
import React from 'react';
import {
  LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend,
} from 'recharts';
import { useSelector } from 'react-redux';

//  I was unable to see any schemas or any information in the API Documentation
//    so I simply implemented a graphing feature for temperature.
//  A button to add entries was added to the header in the Weather.tsx file
//    but what I'm thinking in terms of the future is that the button will
//    be removed and the readings will be automatically fetched every 1.3 minutes.

const WeatherGraph = () => {
  // const [celsius, setCelsius] = useState(true);
  // const toFahrenheit = (c) => (c * 9) / 5 + 32;

  const weather = useSelector((state) => state.weather.value);
  // const weatherF = weather.slice();
  // weatherF.forEach(entry => {
  //   const tempC = entry.temperatureinCelsius;
  //   entry.temperatureinCelsius = toFahrenheit(tempC);
  //   return entry;
  // });

  return (
    <div id='weatherGraph' margin={{ top: 50 }}>
      {
      weather[0]
        ? (
          <h2>
            Current Temperature in C: {weather[0].temperatureinCelsius}
          </h2>
        )
        : null
      }
      {/* <button type='button' onClick={() => setCelsius(!celsius)}>Toggle C/F</button> */}
      <ResponsiveContainer width='100%' aspect={3}>
        <LineChart width={50} height={50} margin={{ top: 50 }} data={weather}>
          <Legend verticalAlign="bottom" height={36} />
          <Line name='Temperature In Celsius' type="monotone" dataKey="temperatureinCelsius" stroke="darkblue" />;
          <CartesianGrid stroke="lightblue" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
        {/* {
        celsius
          ? (
            <LineChart width={50} height={50} margin={{ top: 50 }} data={weather}>
              <Legend verticalAlign="bottom" height={36} />
              <Line name='Temperature In Celsius' type="monotone" dataKey="temperatureinCelsius"
              stroke="darkblue" />;
              <CartesianGrid stroke="lightblue" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          )
          : (
            <LineChart width={50} height={50} margin={{ top: 50 }} data={weatherF}>
              <Legend verticalAlign="bottom" height={36} />
              <Line name='Temperature In Fahrenheit' type="monotone" dataKey="temperatureinCelsius"
              stroke="darkred" />;
              <CartesianGrid stroke="lightred" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          )
        } */}
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherGraph;
