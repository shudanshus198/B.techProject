import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    value: 0,
    pick: {},
    allStocks: {}
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setStockData: (state, action) => {
      console.log({ payload: action.payload });
      state.stockData = action.payload;
    },
    setPickData: (state, action) => {
      state.pick = action.payload;
    },
    setAllStocks: (state, action) => {
      console.log(action.payload);
      state.allStocks = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setStockData, setPickData, setAllStocks } = dashboardSlice.actions;

export default dashboardSlice.reducer;
