import { combineReducers } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBar/slice";
import changeThemeReducer from "./changeTheme/themeSlice";

export const rootReducer = combineReducers({
    sideBar: sideBarReducer,
    changeTheme: changeThemeReducer
});
