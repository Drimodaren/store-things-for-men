import { StoreProvider } from "./StoreProvider";
import { ThemeProviderContainer } from "./ThemeProviderContainer";
import { Header } from "../../layout/Header";
import { LeftSideBar } from "../../layout/SideBar";
import { Main } from "../../layout/Main";
import { Footer } from "../../layout/Footer";

export const App = () => {
    return (
        <StoreProvider>
            <ThemeProviderContainer>
                <Header></Header>
                <Main></Main>
                <LeftSideBar></LeftSideBar>
                <Footer></Footer>
            </ThemeProviderContainer>
        </StoreProvider>
    );
};
