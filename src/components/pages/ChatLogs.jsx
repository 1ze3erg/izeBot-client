import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { useContentContext } from "../../contexts/ContentContext";
import Sidebar from "../layouts/Sidebar/Sidebar";
import Table from "../ui/Table/Table";
import Thead from "../ui/Table/Thead";
import TbodyChatLog from "../ui/Table/TbodyChatLog";
import Pagination from "../ui/Pagination";
import Filter from "../ui/Filter";

function ChatLogs() {
    const { chatLogs, setChatLogs } = useContentContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        axios
            .get("/chat-logs")
            .then((res) => {
                setChatLogs(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [setChatLogs]);

    const handleChangeSearch = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1);
    };

    const handleChangePerPage = (e) => {
        setPerPage(+e.target.value);
        setCurrentPage(1);
    };

    const th = [
        { name: "Date", width: "w-2/12" },
        { name: "Chatter", width: "w-1/12" },
        { name: "Message", width: "w-6/12" },
        { name: "Room", width: "w-3/12" },
    ];

    const filterChatLogs = chatLogs.filter((elem) => {
        return (
            elem.command?.toLowerCase().includes(searchInput.toLowerCase()) ||
            elem.response?.toLowerCase().includes(searchInput.toLowerCase()) ||
            `${elem.interval / 60000}`.includes(searchInput)
        );
    });
    const numberOfPage = Math.ceil(filterChatLogs.length / perPage);
    const start = currentPage === 1 ? 0 : perPage * (currentPage - 1);
    const end = currentPage === 1 ? perPage : perPage * currentPage;
    const showing = filterChatLogs.length ? start + 1 : 0;
    const to = filterChatLogs.length ? (currentPage === numberOfPage ? filterChatLogs.length : end) : 0;
    const total = filterChatLogs.length;

    function createPageArr(page) {
        let arr = [];
        for (let index = 0; index < page; index++) {
            arr.push(index + 1);
        }
        return arr;
    }

    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400 p-5 min-h-screen">
                <h1 className="text-center text-5xl font-semibold pt-5 pb-10">Chat Logs</h1>
                <Filter
                    perPage={perPage}
                    handleChangePerPage={handleChangePerPage}
                    searchInput={searchInput}
                    handleChangeSearch={handleChangeSearch}
                />
                <Table>
                    <Thead th={th} />
                    <TbodyChatLog chatLogs={filterChatLogs.slice(start, end)} />
                </Table>
                <Pagination
                    showing={showing}
                    to={to}
                    total={total}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    createPageArr={createPageArr}
                    numberOfPage={numberOfPage}
                />
            </div>
        </div>
    );
}

export default ChatLogs;
