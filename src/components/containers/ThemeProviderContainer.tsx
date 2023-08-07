import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";

import { ThemeModeEnum } from "../../store/theme/themeSlice";

import { darkTheme, lightTheme } from "../../constants/theme";
import { useAppSelector } from "../../hooks/useAppSelector";

export const ThemeProviderContainer: FC<PropsWithChildren> = ({ children }) => {
    const mode = useAppSelector(state => state.theme.mode);

    return (
        <ThemeProvider theme={mode === ThemeModeEnum.DARK ? darkTheme : lightTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
