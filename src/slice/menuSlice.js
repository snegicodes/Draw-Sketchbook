import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    activeMenuItem: "Pencil",
  },
  reducers: {
    menuItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
  },
});

export const { menuItemClick } = menuSlice.actions;
export default menuSlice.reducer;
