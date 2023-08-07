import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

import { getProductArray } from "../../store/products/selectors";
import { loadProducts } from "../../store/products/slice";

import { useAppSelector } from "../../hooks/useAppSelector";
import { ContainerMain } from "./style";

export const Main = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(getProductArray);
    useEffect(() => {
        dispatch(loadProducts());
    }, []);
    console.log(products.map(item => item.name));

    return <ContainerMain></ContainerMain>;
};
