import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SailingIcon from "@mui/icons-material/Sailing";
import SearchIcon from "@mui/icons-material/Search";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { Typography } from "@mui/material";

import { AsideForMen, ButtonAside } from "./style";

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
