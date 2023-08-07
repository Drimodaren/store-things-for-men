import { combineReducers } from "@reduxjs/toolkit";

import sideBarReducer from "./sideBar/slice";
import themeReducer from "./theme/themeSlice";
import productsReducer from "./products/slice";

export const rootReducer = combineReducers({
    sideBar: sideBarReducer,
    theme: themeReducer,
    products: productsReducer
});
