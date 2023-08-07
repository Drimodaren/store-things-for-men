import { combineReducers } from "@reduxjs/toolkit";

import sideBarReducer from "./sideBar/slice";
import themeReducer from "./theme/themeSlice";

export const rootReducer = combineReducers({
    sideBar: sideBarReducer,
    theme: themeReducer
});
