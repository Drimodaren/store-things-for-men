import { IProduct } from "../types/dto/product";
import { axiosInstanse } from "./axiosInstanc";

export const PRODUCTS_SERVICE_URL = "/items";

class ProductsService {
    async getAllProducts() {
        const response = await axiosInstanse.get<IProduct[]>(PRODUCTS_SERVICE_URL);
        return response.data;
    }
}
export default new ProductsService();
