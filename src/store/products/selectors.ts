import { IProduct } from "../../types/dto/product";
import { RootState } from "../../store";

export const getProductLoading = (state: RootState) => state.products.loading;
export const getProductEntities = (state: RootState) => state.products.entities;
export const getProductArray = (state: RootState) => {
    const entities = getProductEntities(state);
    return Object.values(entities);
};
export const getProductById = (state: RootState, id: IProduct["id"]) => {
    return getProductEntities(state)[id];
};
