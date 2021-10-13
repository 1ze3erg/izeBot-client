import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../config/axios";
import { useContentContext } from "../../contexts/ContentContext";
import Sidebar from "../layouts/Sidebar/Sidebar";
import Filter from "../ui/Filter";
import Pagination from "../ui/Pagination";
import Table from "../ui/Table/Table";
import TbodyCustom from "../ui/Table/TbodyCustom";
import Thead from "../ui/Table/Thead";

function CustomCommands() {
    const { customCommands, setCustomCommands } = useContentContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        axios
            .get("/custom-commands")
            .then((res) => {
                setCustomCommands(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [setCustomCommands]);

    const clickChangeStatus = async (id, status) => {
        try {
            await axios.put(`/custom-commands/${id}`, { status: !status });
            setCustomCommands((currentState) =>
                currentState.map((elem) => (elem.id === id ? { ...elem, status: !elem.status } : elem))
            );
        } catch (err) {
            console.dir(err);
        }
    };

    const clickEditPopUp = async (id, title, label, value) => {
        const { value: inputValue } = await Swal.fire({
            title: title,
            input: "text",
            inputLabel: label,
            inputValue: value,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!";
                }
            },
        });
        if (inputValue && label === "Command") {
            await axios.put(`/custom-commands/${id}`, { command: inputValue });
            setCustomCommands((currentState) =>
                currentState.map((elem) => (elem.id === id ? { ...elem, command: inputValue } : elem))
            );
        }
        if (inputValue && label === "Response") {
            await axios.put(`/custom-commands/${id}`, { response: inputValue });
            setCustomCommands((currentState) =>
                currentState.map((elem) => (elem.id === id ? { ...elem, response: inputValue } : elem))
            );
        }
        if (inputValue && label === "Description") {
            await axios.put(`/custom-commands/${id}`, { description: inputValue });
            setCustomCommands((currentState) =>
                currentState.map((elem) => (elem.id === id ? { ...elem, description: inputValue } : elem))
            );
        }
    };

    const clickDelCustom = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });
            if (result.isConfirmed) {
                await axios.delete(`/custom-commands/${id}`);
                await Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your custom commands has been deleted",
                    showConfirmButton: false,
                    timer: 1000,
                });
                setCustomCommands((currentState) => currentState.filter((elem) => elem.id !== id));
            }
        } catch (err) {
            console.dir(err);
        }
    };

    const handleChangeSearch = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1);
    };

    const handleChangePerPage = (e) => {
        setPerPage(+e.target.value);
        setCurrentPage(1);
    };

    const th = [
        { name: "Status", width: "w-1/12" },
        { name: "Command", width: "w-1/12" },
        { name: "Response", width: "w-8/12" },
        { name: "Actions", width: "w-2/12" },
    ];

    const filterCustomCommands = customCommands.filter((elem) => {
        return (
            elem.command?.toLowerCase().includes(searchInput?.toLowerCase()) ||
            elem.response?.toLowerCase().includes(searchInput?.toLowerCase())
        );
    });
    const numberOfPage = Math.ceil(filterCustomCommands.length / perPage);
    const start = currentPage === 1 ? 0 : perPage * (currentPage - 1);
    const end = currentPage === 1 ? perPage : perPage * currentPage;
    const showing = filterCustomCommands.length ? start + 1 : 0;
    const to = filterCustomCommands.length ? (currentPage === numberOfPage ? filterCustomCommands.length : end) : 0;
    const total = filterCustomCommands.length;

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
                <h1 className="text-center text-5xl font-semibold py-5">Custom Commands</h1>
                <Link to="/command-form">
                    <button className="btn rounded-md bg-indigo-900 text-white my-5">
                        <i className="fas fa-plus"></i> Add Command
                    </button>
                </Link>
                <Filter
                    perPage={perPage}
                    handleChangePerPage={handleChangePerPage}
                    searchInput={searchInput}
                    handleChangeSearch={handleChangeSearch}
                />
                <Table>
                    <Thead th={th} />
                    <TbodyCustom
                        customCommands={filterCustomCommands.slice(start, end)}
                        clickChangeStatus={clickChangeStatus}
                        clickEditPopUp={clickEditPopUp}
                        clickDelCustom={clickDelCustom}
                    />
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

export default CustomCommands;
