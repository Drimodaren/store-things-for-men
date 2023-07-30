import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Theme } from "@mui/material";
import { AsideForMen } from "./sideBarStyle";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SailingIcon from "@mui/icons-material/Sailing";
import useMediaQuery from "@mui/material/useMediaQuery";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FavoriteIcon from "@mui/icons-material/Favorite";

import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

export const LeftSideBar = () => {
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

    return (
        <AsideForMen>
            {matches ? (
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", width: "100%" }}>
                    <List sx={{ flexGrow: 1 }}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DirectionsCarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Car" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SailingIcon />
                                </ListItemIcon>
                                <ListItemText primary="Boat" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TwoWheelerIcon />
                                </ListItemIcon>
                                <ListItemText primary="Bike" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FavoriteIcon />
                                </ListItemIcon>
                                <ListItemText primary="Favorite" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AddShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary="Cart" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            ) : (
                <>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <DirectionsCarIcon />
                    </IconButton>
                    <IconButton>
                        <SailingIcon />
                    </IconButton>
                    <IconButton>
                        <TwoWheelerIcon />
                    </IconButton>
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton>
                        <AddShoppingCartIcon />
                    </IconButton>
                </>
            )}
        </AsideForMen>
    );
};
