import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Content from "./components/layouts/Content";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header/Header";
import MainContainer from "./components/layouts/MainContainer";
import AppProvider from "./contexts/AppContext";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <MainContainer>
                    <Header />
                    <Content />
                    <Footer />
                </MainContainer>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
