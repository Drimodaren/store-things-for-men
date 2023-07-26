import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const initialredux = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development"
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof initialredux.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof initialredux.dispatch;
