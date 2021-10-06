import { useEffect } from "react";
import axios from "../../config/axios";
import { useContentContext } from "../../contexts/ContentContext";
import Sidebar from "../layouts/Sidebar/Sidebar";

function Dashboard() {
    const { customCommands, setCustomCommands, timers, setTimers, chatLogs, setChatLogs, chatRooms, setChatRooms } =
        useContentContext();

    useEffect(() => {
        axios
            .get("/custom-commands")
            .then((res) => {
                setCustomCommands(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
        axios
            .get("/timers")
            .then((res) => {
                setTimers(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
        axios
            .get("/chat-logs")
            .then((res) => {
                setChatLogs(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
        axios
            .get("/chat-rooms")
            .then((res) => {
                setChatRooms(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [setCustomCommands, setTimers, setChatLogs, setChatRooms]);

    const mostChatter = chatLogs.reduce((total, elem) => {
        if (total[elem.chatter]) total[elem.chatter]++;
        else total[elem.chatter] = 1;
        return total;
    }, {});

    const sort = Object.entries(mostChatter).sort((a, b) => b[1] - a[1]);
    console.log();

    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400 p-5">
                <h1 className="text-center text-5xl font-semibold pt-5 pb-10">Dashboard</h1>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-1 text-black">
                    <div className="bg-indigo-200 border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg text-center p-5">
                        <i className="fas fa-user text-5xl mb-3"></i>
                        <h2 className="font-bold text-5xl my-5">Most Chatter</h2>
                        <p className="text-5xl my-5">{new Map(sort).keys().next().value}</p>
                    </div>
                    <div className="bg-indigo-200 border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg text-center p-5">
                        <i className="fas fa-door-open text-5xl mb-3"></i>
                        <h2 className="font-bold text-5xl my-5">Total Room</h2>
                        <p className="text-5xl my-5">{chatRooms.length}</p>
                    </div>
                    <div className="bg-indigo-200 border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg text-center p-5">
                        <i className="fas fa-comment-dots text-5xl mb-3"></i>
                        <h2 className="font-bold text-5xl my-5">Total Chat</h2>
                        <p className="text-5xl my-5">{chatLogs.length}</p>
                    </div>
                    <div className="bg-indigo-200 border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg text-center p-5">
                        <i className="fas fa-terminal text-5xl mb-3"></i>
                        <h2 className="font-bold text-5xl my-5">Total Command</h2>
                        <p className="text-5xl my-5">{customCommands.length + timers.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
