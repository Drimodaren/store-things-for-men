import { SET_CLOSE, SET_OPEN } from "./actionTypes";

export const setOpenAC = () => {
    return {
        type: SET_OPEN
    };
};
export const setCloseAC = () => {
    return {
        type: SET_CLOSE
    };
};

export type TSideBarActions = ReturnType<typeof setOpenAC> | ReturnType<typeof setCloseAC>;
