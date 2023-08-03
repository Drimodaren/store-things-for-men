import { AsideForMen, ButtonAside } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SailingIcon from "@mui/icons-material/Sailing";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FavoriteIcon from "@mui/icons-material/Favorite";

import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { Typography } from "@mui/material";

export const LeftSideBar = () => {
    // const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

    return (
        <AsideForMen>
            <ButtonAside startIcon={<SearchIcon />}>
                <Typography>Search</Typography>
            </ButtonAside>
            <ButtonAside startIcon={<DirectionsCarIcon />}>
                <Typography>Car</Typography>
            </ButtonAside>
            <ButtonAside startIcon={<SailingIcon />}>
                <Typography>Boat</Typography>
            </ButtonAside>
            <ButtonAside startIcon={<TwoWheelerIcon />}>
                <Typography>Bike</Typography>
            </ButtonAside>
            <ButtonAside startIcon={<FavoriteIcon />}>
                <Typography>Favorite</Typography>
            </ButtonAside>
            <ButtonAside startIcon={<AddShoppingCartIcon />}>
                <Typography>Cart</Typography>
            </ButtonAside>
        </AsideForMen>
    );
};
