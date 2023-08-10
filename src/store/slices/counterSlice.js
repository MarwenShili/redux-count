import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    isDone: true,
  },
  reducers: {
    increment: (state, action) => {
      //state.counter
      //action.payload
      state.counter += action.payload;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    reset: (state) => {
      state.counter = 0;
    },
    // incrementByValue: (state, action) => {
    //   const value = action.payload;
    //   state.counter += value;
    // },
  },
});

export const { increment, decrement, reset, incrementByValue } =
  counterSlice.actions;

export default counterSlice.reducer;

//for assignments
// tasks: [
//   {
//     id: 123445,
//     name: "task 1",
//     completed: false,
//   },
//   {
//     id: 123447,
//     name: "task 2",
//     completed: false,
//   },
// ],
