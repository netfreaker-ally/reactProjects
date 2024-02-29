// // import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// const initialCounterState = { counter: 0, showCounter: true };

// // function counterReducerFn(state = initialState, action) {
// //   if (action.type === "increment") {
// //     return {
// //       counter: state.counter + 1,
// //       showCounter: state.showCounter,
// //     };
// //   } else if (action.type === "decrement") {
// //     return {
// //       counter: state.counter - 1,
// //       showCounter: state.showCounter,
// //     };
// //   } else if (action.type === "increase") {
// //     return {
// //       counter: state.counter + action.amount,
// //       showCounter: state.showCounter,
// //     };
// //   } else if (action.type === "toggle") {
// //     return {
// //       showCounter: !state.showCounter,
// //       counter: state.counter,
// //     };
// //   } else {
// //     return state;
// //   }
// // }

// // const store = configureStore({
// //   reducer: { counter: counterSlice.reducer },
// // });
// const initialAuthState = {
//   isAuthentication: false,
// };

import counterreducer from "./counter";
import authReducer from "./auth";
const store = configureStore({
  reducer: { counter: counterreducer, auth: authReducer },
});

export default store;
