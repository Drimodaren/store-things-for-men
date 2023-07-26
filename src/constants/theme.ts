import { createTheme, responsiveFontSizes } from "@mui/material";

const defaultPalette = createTheme({
    palette: {
        primary: {
            main: "#364163"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    }
});
export const theme = responsiveFontSizes(defaultPalette);
