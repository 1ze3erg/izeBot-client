import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../config/axios";
import { useContentContext } from "../../contexts/ContentContext";
import Sidebar from "../layouts/Sidebar/Sidebar";
import Table from "../ui/Table/Table";
import TbodyTimer from "../ui/Table/TbodyTimer";
import Thead from "../ui/Table/Thead";

function Timers() {
    const { timers, setTimers } = useContentContext();

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

    const th = [
        { name: "Status", width: "w-1/12" },
        { name: "Timer Name", width: "w-1/12" },
        { name: "Response", width: "w-6/12" },
        { name: "Interval (mins)", width: "w-1/12" },
        { name: "Actions", width: "w-3/12" },
    ];

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
                    if (isNaN(value)) {
                        return "Input value must be numeric";
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

                <div className="flex justify-between mb-2 md:flex-col">
                    <div className="flex md:flex-1 items-center md:mb-2 md:text-xl md:text-center md:border-2 md:border-black md:p-2 md:bg-gray-600">
                        <span className="mr-2 md:flex-1 md:m-0 md:text-white">Show</span>
                        <select className="mr-2 p-2 md:flex-1 self-stretch md:m-0">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                        </select>
                        <span className="md:flex-1 md:text-white">Commands</span>
                    </div>
                    <div className="flex flex-1 justify-end items-center md:text-xl md:text-center md:border-2 md:border-black md:p-2 md:bg-gray-600">
                        <label htmlFor="search" className="mr-2 md:flex-1 md:m-0 md:text-white">
                            Search
                        </label>
                        <input type="text" id="search" className="p-2 md:flex-1" />
                    </div>
                </div>

                <Table>
                    <Thead th={th} />
                    <TbodyTimer
                        timers={timers}
                        clickDelTimer={clickDelTimer}
                        clickChangeStatus={clickChangeStatus}
                        clickEditPopUp={clickEditPopUp}
                    />
                </Table>

                <div className="flex justify-between items-center mt-2 md:flex-col">
                    <span className="md:mb-5 mt-2">
                        Showing 1 to {timers.length} of {timers.length} Timers
                    </span>
                    <ul className="flex text-center md:grid md:grid-cols-4 md:gap-px">
                        <li
                            className="
                                cursor-pointer
                                hover:bg-gray-500
                                border-2 border-black border-r-0
                                rounded-l-md
                                px-4
                                py-2
                                md:rounded-none md:border-2
                            "
                        >
                            First
                        </li>
                        <li
                            className="
                                cursor-pointer
                                hover:bg-gray-500
                                border-2 border-black border-r-0
                                px-4
                                py-2
                                md:border-2
                            "
                        >
                            Previous
                        </li>
                        <li
                            className="
                                cursor-pointer
                                hover:bg-gray-500
                                border-2 border-black border-r-0
                                px-4
                                py-2
                                md:border-2
                            "
                        >
                            1
                        </li>
                        <li
                            className="
                                cursor-pointer
                                hover:bg-gray-500
                                border-2 border-black border-r-0
                                px-4
                                py-2
                                md:border-2
                            "
                        >
                            2
                        </li>
                        <li
                            className="
                                cursor-pointer
                                hover:bg-gray-500
                                border-2 border-black border-r-0
                                px-4
                                py-2
                                md:border-2
                            "
                        >
                            3
                        </li>
                        <li
                            className="
                                cursor-pointer
                                hover:bg-gray-500
                                border-2 border-black border-r-0
                                px-4
                                py-2
                                md:border-2
                            "
                        >
                            Next
                        </li>
                        <li
                            className="
                                cursor-pointer
                                hover:bg-gray-500
                                border-2 border-black
                                rounded-r-md
                                px-4
                                py-2
                                md:rounded-none md:border-2
                            "
                        >
                            Last
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Timers;
