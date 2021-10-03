import { createContext, useContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    const [auth, setAuth] = useState(true);
    return <AppContext.Provider value={{ auth, setAuth }}>{children}</AppContext.Provider>;
}

function useAppContext() {
    return useContext(AppContext);
}

export default AppProvider;
export { useAppContext };