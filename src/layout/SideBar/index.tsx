import {
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Theme,
    useTheme
} from "@mui/material";
import { DrawerForMen, Search, SearchIconWrapper, StyledInputBase } from "./sideBarStyle";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleSideBarAC } from "../../store/sideBar/slice";
import { useAppSelector } from "../../hooks/useAppSelector";
import useMediaQuery from "@mui/material/useMediaQuery";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export const LeftSideBar = () => {
    const dispatch = useAppDispatch();
    const openSideBar = useAppSelector(state => state.sideBar);
    const theme: Theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

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
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DirectionsCarIcon />
                        </ListItemIcon>
                        <ListItemText primary="`About cars`" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <RestaurantIcon />
                        </ListItemIcon>
                        <ListItemText primary="About food" />
                    </ListItemButton>
                </ListItem>
            </List>
        </DrawerForMen>
    );
};
