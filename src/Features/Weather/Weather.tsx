import React, { FC } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  useQuery,
  gql,
  InMemoryCache,
} from '@apollo/client';
import { LineChart, Line } from 'recharts';
import { useGeolocation } from 'react-use';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';
import Chip from '../../components/Chip';

const client = new ApolloClient({
  uri: 'https://react-assessment.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const toF = (c: number) => (c * 9) / 5 + 32;

const query = gql`
  query ($latLong: WeatherQuery!) {
    getWeatherForLocation(latLong: $latLong) {
      description
      locationName
      temperatureinCelsius
    }
  }
`;
const WeatherDataList: WeatherData[] = [];

type WeatherData = {
  temperatureinCelsius: number;
  description: string;
  locationName: string;
};
type WeatherDataResponse = {
  getWeatherForLocation: WeatherData;
};

const Weather: FC = () => {
  const getLocation = useGeolocation();
  // Default to houston
  const latLong = {
    latitude: getLocation.latitude || 29.7604,
    longitude: getLocation.longitude || -95.3698,
  };
  const { loading, error, data } = useQuery<WeatherDataResponse>(query, {
    variables: {
      latLong,
    },
  });

  if (loading) return <LinearProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!data) return <Chip label="Weather not found" />;
  const { locationName, description, temperatureinCelsius } = data.getWeatherForLocation;
  WeatherDataList.push(data.getWeatherForLocation);
  if (WeatherDataList.length > 23) {
    WeatherDataList.pop();
  }

  return <Chip label={`Weather in ${locationName}: ${description} and ${Math.round(toF(temperatureinCelsius))}°`} />;
};

const graphWeather: FC = () => (
  <LineChart width={400} height={400} data={WeatherDataList}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />;
  </LineChart>
);

export default () => (
  <ApolloProvider client={client}>
    <Weather />
  </ApolloProvider>
);
