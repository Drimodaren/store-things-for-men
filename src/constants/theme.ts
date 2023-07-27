import { createTheme, responsiveFontSizes } from "@mui/material";

const defaultPalette = createTheme({
    palette: {
        primary: {
            main: "#364163"
        }
    }
});
export const theme = responsiveFontSizes(defaultPalette);
