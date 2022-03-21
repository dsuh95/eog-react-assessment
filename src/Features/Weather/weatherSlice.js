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
      console.log(currentData, state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = weatherSlice.actions;

export default weatherSlice.reducer;
