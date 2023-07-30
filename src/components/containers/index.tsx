import { StoreProvider } from "./StoreProvider";
import { ThemeProviderContainer } from "./ThemeProviderContainer";
import { Header } from "../../layout/Header";
import { LeftSideBar } from "../../layout/SideBar";
import { Main } from "../../layout/Main";
import { Footer } from "../../layout/Footer";
import { Box } from "@mui/material";

export const App = () => {
    return (
        <StoreProvider>
            <ThemeProviderContainer>
                <Box
                    sx={{
                        display: "grid",
                        height: "100vh",
                        gap: 1,
                        gridTemplateColumns: "1fr 13fr",
                        gridTemplateRows: "3rem 1fr 3rem",
                        gridTemplateAreas: {
                            xs: `"header header" "main main" "navigation navigation" "footer footer"`,
                            sm: `"header header" "navigation main" "navigation main""footer footer"`
                        }
                    }}
                >
                    <Header />
                    <Main />
                    <LeftSideBar />
                    <Footer />
                </Box>
            </ThemeProviderContainer>
        </StoreProvider>
    );
};
