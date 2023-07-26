import { combineReducers } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBar/slice";

export const rootReducer = combineReducers({
    sideBar: sideBarReducer
});
