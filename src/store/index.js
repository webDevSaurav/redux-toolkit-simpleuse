import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

//store
const store = configureStore({
  //automatically merges different reducers
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store; //this can be used in react to subscribe
