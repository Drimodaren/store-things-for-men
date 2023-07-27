import { createSlice } from "@reduxjs/toolkit";

export enum ThemeModeEnum {
    DARK = "dark",
    LIGHT = "light"
}

export interface IThemeState {
    mode: ThemeModeEnum;
}

export const initialState: IThemeState = {
    mode: ThemeModeEnum.DARK
};

export const themeSlice = createSlice({
    name: "changeTheme",
    initialState,
    reducers: {
        toggleThemeAC: state => {
            state.mode = state.mode === ThemeModeEnum.DARK ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK;
        }
    }
});

const { reducer, actions } = themeSlice;
export const { toggleThemeAC } = actions;
export default reducer;
