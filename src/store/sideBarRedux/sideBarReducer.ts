import { TSideBarActions } from "./action";
import { SET_CLOSE, SET_OPEN } from "./actionTypes";
import { INITIAL_STATE } from "./initialState";

export const sideBarReducer = (state: object = INITIAL_STATE, action: TSideBarActions) => {
    switch (action.type) {
        case SET_OPEN:
            return {
                ...state,
                stateSide: true
            };
        case SET_CLOSE:
            return {
                ...state,
                stateSide: true
            };

        default:
            return state;
    }
};
