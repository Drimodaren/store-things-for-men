import { Divider, IconButton } from "@mui/material";
import { DrawerForMen, Search, SearchIconWrapper, StyledInputBase } from "./sideBarStyle";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleSideBarAC } from "../../store/sideBar/slice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";

export const LeftSideBar = () => {
    const dispatch = useAppDispatch();
    const openSideBar = useAppSelector(state => state.sideBar);
    //const theme = useTheme();
    const matches = useMediaQuery("(min-width:600px)");

    const toggle = () => {
        dispatch(toggleSideBarAC());
    };

    return (
        <DrawerForMen anchor={matches ? "left" : "bottom"} open={openSideBar}>
            <div>
                <IconButton onClick={toggle}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
        </DrawerForMen>
    );
};
