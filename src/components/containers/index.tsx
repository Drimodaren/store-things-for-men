import { Footer } from "layout/Footer";
import { Header } from "layout/Header";
import { Main } from "layout/Main";
import { LeftSideBar } from "layout/SideBar";

import { StoreProvider } from "./StoreProvider";
import { ThemeProviderContainer } from "./ThemeProviderContainer";
import { AppBox } from "./style";

export const App = () => {
    return (
        <StoreProvider>
            <ThemeProviderContainer>
                <AppBox>
                    <Header />
                    <Main />
                    <LeftSideBar />
                    <Footer />
                </AppBox>
            </ThemeProviderContainer>
        </StoreProvider>
    );
};
