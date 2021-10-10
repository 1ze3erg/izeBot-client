import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { useContentContext } from "../../contexts/ContentContext";
import Sidebar from "../layouts/Sidebar/Sidebar";
import Filter from "../ui/Filter";
import Pagination from "../ui/Pagination";
import Table from "../ui/Table/Table";
import TbodyDefault from "../ui/Table/TbodyDefault";
import Thead from "../ui/Table/Thead";

function DefaultCommands() {
    const { defaultCommands, setDefaultCommands } = useContentContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        axios
            .get("/default-commands")
            .then((res) => {
                setDefaultCommands(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [setDefaultCommands]);

    const handleChangeSearch = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1);
    };

    const handleChangePerPage = (e) => {
        setPerPage(+e.target.value);
        setCurrentPage(1);
    };

    const th = [
        { name: "Command", width: "w-2/12" },
        { name: "Description", width: "w-5/12" },
        { name: "Response", width: "w-5/12" },
    ];

    const filterDefaultCommands = defaultCommands.filter((elem) => {
        return (
            elem.command?.toLowerCase().includes(searchInput.toLowerCase()) ||
            elem.description?.toLowerCase().includes(searchInput.toLowerCase()) ||
            elem.response?.toLowerCase().includes(searchInput.toLowerCase())
        );
    });
    const numberOfPage = Math.ceil(filterDefaultCommands.length / perPage);
    const start = currentPage === 1 ? 0 : perPage * (currentPage - 1);
    const end = currentPage === 1 ? perPage : perPage * currentPage;
    const showing = start + 1;
    const to = currentPage === numberOfPage ? filterDefaultCommands.length : end;
    const total = filterDefaultCommands.length;

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
            <div className="col-span-4 bg-gray-400 p-5">
                <h1 className="text-center text-5xl font-semibold pt-5 pb-10">Default Commands</h1>
                <Filter
                    perPage={perPage}
                    handleChangePerPage={handleChangePerPage}
                    searchInput={searchInput}
                    handleChangeSearch={handleChangeSearch}
                />
                <Table>
                    <Thead th={th} />
                    <TbodyDefault defaultCommands={filterDefaultCommands.slice(start, end)} />
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

export default DefaultCommands;
