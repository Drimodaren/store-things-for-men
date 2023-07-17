import { Button, styled } from "@mui/material";
import { StoreProvider } from "./StoreProvider";
import { ThemeProviderContainer } from "./ThemeProviderContainer";

export const StyledButton = styled(Button)<{ redNumber?: number }>(({ theme, redNumber, color }) => {
    // console.log(theme);
    console.log(color);

    return {
        // backgroundColor: theme.palette.primary.light
    };
});
export const App = () => {
    return (
        <StoreProvider>
            <ThemeProviderContainer>
                <StyledButton color="warning">Button</StyledButton>
            </ThemeProviderContainer>
        </StoreProvider>
    );
};
