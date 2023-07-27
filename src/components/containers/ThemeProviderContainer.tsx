import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { theme as defaultTheme } from "../../constants/theme";
import { FC, PropsWithChildren, useMemo } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

export const ThemeProviderContainer: FC<PropsWithChildren> = ({ children }) => {
    const mode = useAppSelector(state => state.changeTheme.mode);
    const theme = useMemo(() => {
        return createTheme({
            ...defaultTheme,
            palette: {
                mode
            }
        });
    }, [mode]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
