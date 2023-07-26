import { createSlice } from "@reduxjs/toolkit";

export const initialState = (): boolean => {
    return false;
};

export const sideBarSlice = createSlice({
    name: "sideBar",
    initialState: initialState(),
    reducers: {
        toggleSideBarAC: state => {
            return !state;
        }
    }
});

const { reducer, actions } = sideBarSlice;
export const { toggleSideBarAC } = actions;
export default reducer;
