import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
export const appStore = configureStore({
  reducer: rootReducer,
});
