import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../Features/Weather/weatherSlice';

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
