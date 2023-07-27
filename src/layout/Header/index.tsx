import { FormGroup, IconButton, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBarForMen, PartUtils, ThemeSwitch, ToolbarForMen } from "./headerStyle";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleSideBarAC } from "../../store/sideBar/slice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { toggleThemeAC } from "../../store/changeTheme/themeSlice";
import { useAppSelector } from "../../hooks/useAppSelector";

export const Header = () => {
    const dispatch = useAppDispatch();
    const changeColor = useAppSelector(state => state.changeTheme);
    console.log(changeColor.mode);

    const toggle = () => {
        dispatch(toggleSideBarAC());
    };

    const handlechangeColor = () => {
        dispatch(toggleThemeAC());
    };
    return (
        <AppBarForMen>
            <ToolbarForMen>
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
