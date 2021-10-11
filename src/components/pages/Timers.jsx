import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContentContext } from "../../contexts/ContentContext";
import { isNumeric, isInt } from "validator";
import Swal from "sweetalert2";
import axios from "../../config/axios";
import Sidebar from "../layouts/Sidebar/Sidebar";
import Filter from "../ui/Filter";
import Pagination from "../ui/Pagination";
import Table from "../ui/Table/Table";
import TbodyTimer from "../ui/Table/TbodyTimer";
import Thead from "../ui/Table/Thead";

function Timers() {
    const { timers, setTimers } = useContentContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        axios
            .get("/timers")
            .then((res) => {
                setTimers(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [setTimers]);

    const clickChangeStatus = async (id, status) => {
        try {
            await axios.put(`/timers/${id}`, { status: !status });
            setTimers((currentState) =>
                currentState.map((elem) => (elem.id === id ? { ...elem, status: !elem.status } : elem))
            );
        } catch (err) {
            console.dir(err);
        }
    };

    const clickEditPopUp = async (id, title, label, value) => {
        try {
            const { value: inputValue } = await Swal.fire({
                title: title,
                input: "text",
                inputLabel: label,
                inputValue: label !== "Interval" ? value : value / 60000,
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                        return "You need to write something!";
                    }
                    if (!isNumeric(value)) {
                        return "Input value must be numeric";
                    }
                    if (!isInt(value)) {
                        return "Input value must be integer";
                    }
                },
            });
            if (inputValue && label === "TimerName") {
                await axios.put(`/timers/${id}`, { timerName: inputValue });
                setTimers((currentState) =>
                    currentState.map((elem) => (elem.id === id ? { ...elem, timerName: inputValue } : elem))
                );
            }
            if (inputValue && label === "Response") {
                await axios.put(`/timers/${id}`, { response: inputValue });
                setTimers((currentState) =>
                    currentState.map((elem) => (elem.id === id ? { ...elem, response: inputValue } : elem))
                );
            }
            if (inputValue && label === "Interval") {
                await axios.put(`/timers/${id}`, { interval: `${inputValue * 60000}` });
                setTimers((currentState) =>
                    currentState.map((elem) => (elem.id === id ? { ...elem, interval: `${inputValue * 60000}` } : elem))
                );
            }
            if (inputValue && label === "Description") {
                await axios.put(`/timers/${id}`, { description: inputValue });
                setTimers((currentState) =>
                    currentState.map((elem) => (elem.id === id ? { ...elem, description: inputValue } : elem))
                );
            }
        } catch (err) {
            console.dir(err);
        }
    };

    const clickDelTimer = async (id) => {
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
                await axios.delete(`/timers/${id}`);
                await Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your timers has been deleted",
                    showConfirmButton: false,
                    timer: 1000,
                });
                setTimers((currentState) => currentState.filter((elem) => elem.id !== id));
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
        { name: "Timer Name", width: "w-1/12" },
        { name: "Response", width: "w-6/12" },
        { name: "Interval (mins)", width: "w-1/12" },
        { name: "Actions", width: "w-3/12" },
    ];

    const filterTimers = timers.filter((elem) => {
        return (
            elem.command?.toLowerCase().includes(searchInput.toLowerCase()) ||
            elem.response?.toLowerCase().includes(searchInput.toLowerCase()) ||
            `${elem.interval / 60000}`.includes(searchInput) 
        );
    });
    const numberOfPage = Math.ceil(filterTimers.length / perPage);
    const start = currentPage === 1 ? 0 : perPage * (currentPage - 1);
    const end = currentPage === 1 ? perPage : perPage * currentPage;
    const showing = start + 1;
    const to = currentPage === numberOfPage ? filterTimers.length : end;
    const total = filterTimers.length;

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
                <h1 className="text-center text-5xl font-semibold py-5">Timer</h1>

                <Link to="/timer-form">
                    <button className="btn rounded-md bg-indigo-900 text-white my-5">
                        <i className="fas fa-plus"></i> Add Timer
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
                    <TbodyTimer
                        timers={filterTimers.slice(start, end)}
                        clickDelTimer={clickDelTimer}
                        clickChangeStatus={clickChangeStatus}
                        clickEditPopUp={clickEditPopUp}
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

export default Timers;
