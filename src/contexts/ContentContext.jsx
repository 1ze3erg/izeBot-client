import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

function ContenProvider({ children }) {
    const [customCommands, setCustomCommands] = useState([]);
    const [timers, setTimers] = useState([]);
    const [chatLogs, setChatLogs] = useState([]);
    const [chatRooms, setChatRooms] = useState([]);

    return (
        <ContentContext.Provider
            value={{
                customCommands,
                setCustomCommands,
                timers,
                setTimers,
                chatLogs,
                setChatLogs,
                chatRooms,
                setChatRooms,
            }}
        >
            {children}
        </ContentContext.Provider>
    );
}

function useContentContext() {
    return useContext(ContentContext);
}

export default ContenProvider;
export { useContentContext };
