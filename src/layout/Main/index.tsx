import { Typography } from "@mui/material";
import { ContainerMain } from "./style";
import axios from "axios";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useEffect } from "react";
import { loadProducts } from "../../store/products/slice";
import { getProductArray } from "../../store/products/selectors";

export const Main = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(getProductArray);
    useEffect(() => {
        dispatch(loadProducts());
    }, []);
    console.log(products.map(item => item.name));

    return <ContainerMain></ContainerMain>;
};
