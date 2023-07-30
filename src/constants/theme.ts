import { createTheme, responsiveFontSizes } from "@mui/material";

const darkPalette = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#56a0d3"
        }
    },
    typography: {
        h1: {}
    }
});

const lightPalette = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#564163"
        }
    },
    typography: {
        h1: {}
    }
});
export const darkTheme = responsiveFontSizes(darkPalette);
export const lightTheme = responsiveFontSizes(lightPalette);
