import { FormControlLabel, FormGroup, IconButton, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBarForMen, PartUtils, ThemeSwitch, ToolbarForMen } from "./headerStyle";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleSideBarAC } from "../../store/sideBar/slice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Header = () => {
    const dispatch = useAppDispatch();

    const toggle = () => {
        dispatch(toggleSideBarAC());
    };

    const [changeColor, setColor] = useState(false);

    const handlechangeColor = () => {
        setColor(!changeColor);
    };
    return (
        <AppBarForMen>
            <ToolbarForMen open={changeColor}>
                <IconButton onClick={toggle}>
                    <MenuIcon />
                </IconButton>
                <PartUtils>
                    <FormGroup>
                        {<ThemeSwitch sx={{ m: 1 }} defaultChecked size="small" onClick={handlechangeColor} />}
                    </FormGroup>
                    <IconButton>
                        <Badge badgeContent={4} color="secondary">
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </PartUtils>
            </ToolbarForMen>
        </AppBarForMen>
    );
};
