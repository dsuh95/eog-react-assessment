import React, { useState, useEffect } from 'react';
// import React from 'react';
import {
  LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend,
} from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import { toC, toF } from '../Features/Weather/weatherSlice';

//  I was unable to see any schemas or any information in the API Documentation
//    so I simply implemented a graphing feature for temperature.
//  A button to add entries was added to the header in the Weather.tsx file
//    but what I'm thinking in terms of the future is that the button will
//    be removed and the readings will be automatically fetched every 1.3 minutes.

const WeatherGraph = () => {
  const dispatch = useDispatch();
  const [metric, setMetric] = useState('c');

  const weather = useSelector((state) => state.weather.value);
  console.log(weather);

  useEffect(() => {

  }, [metric]);

  const toggleMetric = () => {
    if (metric === 'c') {
      setMetric('f');
      dispatch(toF());
    } else if (metric === 'f') {
      setMetric('c');
      dispatch(toC());
    }
  };

  return (
    <div id='weatherGraph' margin={{ top: 50 }}>
      {
      weather[0]
        ? (
          <div>
            {metric === 'c'
              ? (
                <h2>
                  Latest Temperature in Celsius: {weather[0].temperatureinCelsius}
                </h2>
              )
              : (
                <h2>
                  Latest Temperature in Fahrenheit: {weather[0].temperatureinCelsius}
                </h2>
              )}
          </div>
        )
        : null
      }
      <button type='button' onClick={() => toggleMetric()}>Toggle C/F</button>
      <ResponsiveContainer width='100%' aspect={3}>
        {
        metric === 'c'
          ? (
            <LineChart width={50} height={50} margin={{ top: 50 }} data={weather}>
              <Legend verticalAlign="bottom" height={36} />
              <Line name='Temperature In Celsius' type="monotone" dataKey="temperatureinCelsius" stroke="darkblue" />;
              <CartesianGrid stroke="lightblue" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          )
          : (
            <LineChart width={50} height={50} margin={{ top: 50 }} data={weather}>
              <Legend verticalAlign="bottom" height={36} />
              <Line name='Temperature In Fahrenheit' type="monotone" dataKey="temperatureinCelsius" stroke="darkred" />;
              <CartesianGrid stroke="yellow" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          )
        }
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherGraph;
