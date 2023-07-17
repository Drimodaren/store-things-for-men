import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "constants/theme";
import { FC, PropsWithChildren } from "react";

export const ThemeProviderContainer: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
