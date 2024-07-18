// src/store/isAuth.js
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuth: false
};

const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState: initialAuthState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    }
  },
});

export const { setIsAuth } = isAuthSlice.actions;
export default isAuthSlice.reducer;
