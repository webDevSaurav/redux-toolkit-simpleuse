import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

//create slices of state
// conter will have a slice, auth will have a slice
//it needs
//  name-> an identifier
//  initial state
//  reducers  -> no need to use if - else + we can mutate the state
const coutnerSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// export const counterSlice = counterSlice.actions;
export const counterActions = coutnerSlice.actions;
export default coutnerSlice.reducer;
