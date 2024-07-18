// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import navClickReducer from "./navClick";
import isAuthReducer from "./isAuth";

const store = configureStore({
  reducer: { 
    navClick: navClickReducer,
    isAuth: isAuthReducer,
  },
});

export default store;
