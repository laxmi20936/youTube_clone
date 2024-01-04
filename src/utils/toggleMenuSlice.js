import { createSlice } from "@reduxjs/toolkit";

const toggleMenuSlice = createSlice({
  name: "toggle",
  initialState: {
    isOpenMenu: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isOpenMenu = !state.isOpenMenu;
    },
    closeMenu: (state) => {
      state.isOpenMenu = false;
    },
    openMenu: (state) => {
        state.isOpenMenu = true;
      },
  },
});

// toggleMenuSlice:{
//     actions:{}
//     reducer:
// }
export const { toggleMenu ,closeMenu, openMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
