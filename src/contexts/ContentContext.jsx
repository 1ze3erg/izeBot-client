import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

function ContenProvider({ children }) {
    const [customCommands, setCustomCommands] = useState([]);
    const [timers, setTimers] = useState([]);
    return <ContentContext.Provider value={{ customCommands, setCustomCommands, timers, setTimers }}>{children}</ContentContext.Provider>;
}

function useContentContext() {
    return useContext(ContentContext);
}

export default ContenProvider;
export { useContentContext };
