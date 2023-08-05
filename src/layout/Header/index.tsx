import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, FormGroup, IconButton } from "@mui/material";

import { ThemeModeEnum, toggleThemeAC } from "../../store/theme/themeSlice";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
    AppBarForMen,
    PartUtils,
    Search,
    SearchIconWrapper,
    StyledInputBase,
    ThemeSwitch,
    ToolbarForMen
} from "./style";

export const Header = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector(state => state.theme.mode);

    const handlechangeColor = () => {
        dispatch(toggleThemeAC());
    };
    return (
        <AppBarForMen>
            <ToolbarForMen>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
                </Search>

                <PartUtils>
                    <FormGroup>
                        {<ThemeSwitch checked={mode === ThemeModeEnum.DARK} onClick={handlechangeColor} />}
                    </FormGroup>
                    <IconButton>
                        <Badge badgeContent={4} color="secondary">
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <AccountCircle />
                    </IconButton>
                </PartUtils>
            </ToolbarForMen>
        </AppBarForMen>
    );
};
