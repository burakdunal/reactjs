// src/store/navClick.js
import { createSlice } from "@reduxjs/toolkit";

const initialClickState = {
  hash: '',
  triggerScroll: false,
  triggeredOnAnotherPage: false,
};

const navClickSlice = createSlice({
  name: 'navClick',
  initialState: initialClickState,
  reducers: {
    setHash(state, action) {
      state.hash = action.payload;
      state.triggerScroll = true;
    },
    setHashAnotherPage(state, action) {
      state.hash = action.payload;
      state.triggerScroll = true;
      state.triggeredOnAnotherPage = true;
    },
    resetScroll(state) {
      state.triggerScroll = false;
      state.hash = '';
      state.triggeredOnAnotherPage = false;
    }
  },
});

export const { setHash, setHashAnotherPage, resetScroll } = navClickSlice.actions;
export default navClickSlice.reducer;
