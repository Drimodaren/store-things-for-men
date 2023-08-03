import { StoreProvider } from "./StoreProvider";
import { ThemeProviderContainer } from "./ThemeProviderContainer";
import { Header } from "../../layout/Header";
import { LeftSideBar } from "../../layout/SideBar";
import { Main } from "../../layout/Main";
import { Footer } from "../../layout/Footer";
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
