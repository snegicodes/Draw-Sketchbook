import { combineReducers } from "redux";
import menuReducer from "@/slice/menuSlice"; // Adjust the path accordingly

const rootReducer = combineReducers({
  menu: menuReducer,
  // other reducers...
});

export default rootReducer;
