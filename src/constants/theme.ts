import { createTheme, responsiveFontSizes } from "@mui/material";

const defaultPalette = createTheme({});
export const theme = responsiveFontSizes(defaultPalette);
