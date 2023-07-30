import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../../constants/theme";
import { FC, PropsWithChildren } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

export const ThemeProviderContainer: FC<PropsWithChildren> = ({ children }) => {
    const mode = useAppSelector(state => state.theme.mode);

    return (
        <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
