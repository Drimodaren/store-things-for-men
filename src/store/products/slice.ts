import { normalizeData } from "./../../utils/normalizeData";
import { ELoadingState } from "./../../types/loadingState";
import { IProduct } from "./../../types/dto/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "../../API/productsService";
interface IProductsState {
    entities: Record<IProduct["id"], IProduct>;
    ids: IProduct["id"][];
    loading: ELoadingState;
    error: string | null;
}

export const initialState = (): IProductsState => ({
    entities: {},
    ids: [],
    loading: ELoadingState.NEVER,
    error: null
});

export const productSlice = createSlice({
    name: "products",
    reducers: {},
    initialState: initialState(),
    extraReducers: builder => {
        builder
            .addCase(loadProducts.pending, state => {
                state.loading = ELoadingState.LOADING;
            })
            .addCase(loadProducts.rejected, (state, action) => {
                state.error = action.error.message ?? "error";
                state.loading = ELoadingState.LOADED;
            })
            .addCase(loadProducts.fulfilled, (state, action) => {
                state.loading = ELoadingState.LOADED;
                const data = normalizeData(action.payload);
                state.entities = data.entities;
                state.ids = data.ids;
            });
    }
});

export const loadProducts = createAsyncThunk("products/loadProducts", async () => {
    try {
        return await productsService.getAllProducts();
    } catch (error) {
        throw new Error("fuck");
    }
});

export const { reducer } = productSlice;
export default reducer;
