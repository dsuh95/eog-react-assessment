import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, data) => {
      const currentData = state.value;
      currentData.push(data.payload);
      if (currentData.length > 23) {
        currentData.pop();
      }
      state = currentData.slice();
    },
    toC: (state) => {
      const currentData = state.value;
      const toCelsius = (f) => (f - 32) * (5 / 9);
      currentData.forEach(entry => {
        entry.temperatureinCelsius = (toCelsius(entry.temperatureinCelsius));
      });
      state = currentData.slice();
    },
    toF: (state) => {
      const currentData = state.value;
      const toFahrenheit = (c) => (c * 1.8) + 32;
      currentData.forEach(entry => {
        entry.temperatureinCelsius = (toFahrenheit(entry.temperatureinCelsius));
      });
      state = currentData.slice();
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, toC, toF } = weatherSlice.actions;

export default weatherSlice.reducer;
