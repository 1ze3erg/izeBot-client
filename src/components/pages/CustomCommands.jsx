import { useEffect } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import axios from "../../config/axios";
import { useContentContext } from "../../contexts/ContentContext";
import Sidebar from "../layouts/Sidebar/Sidebar";
import Table from "../ui/Table/Table";
import TbodyCustom from "../ui/Table/TbodyCustom";
import Thead from "../ui/Table/Thead";

function CustomCommands() {
    const { customCommands, setCustomCommands } = useContentContext();
    const history = useHistory();

    const th = [
        { name: "Status", width: "w-1/12" },
        { name: "Command", width: "w-1/12" },
        { name: "Response", width: "w-7/12" },
        { name: "Actions", width: "w-3/12" },
    ];

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
                    timer: 1500,
                });
                setCustomCommands((currentState) => currentState.filter((elem) => elem.id !== id));
            }
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400 p-5">
                <h1 className="text-center text-5xl font-semibold py-5">Custom Commands</h1>

                <button
                    className="btn rounded-md bg-indigo-900 text-white my-5"
                    onClick={() => history.push("/command-form")}
                >
                    <i className="fas fa-plus"></i> Add Command
                </button>

                <div className="flex justify-between mb-2 md:flex-col">
                    <div
                        className="
                            flex
                            md:flex-1
                            items-center
                            md:mb-2 md:text-xl md:text-center md:border-2 md:border-black md:p-2 md:bg-gray-600
                        "
                    >
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
                    <div
                        className="
                            flex flex-1
                            justify-end
                            items-center
                            md:text-xl md:text-center md:border-2 md:border-black md:p-2 md:bg-gray-600
                        "
                    >
                        <label htmlFor="search" className="mr-2 md:flex-1 md:m-0 md:text-white">
                            Search
                        </label>
                        <input type="text" id="search" className="p-2 md:flex-1" />
                    </div>
                </div>

                <Table>
                    <Thead th={th} />
                    <TbodyCustom
                        customCommands={customCommands}
                        clickChangeStatus={clickChangeStatus}
                        clickEditPopUp={clickEditPopUp}
                        clickDelCustom={clickDelCustom}
                    />
                </Table>

                <div className="flex justify-between items-center mt-2 md:flex-col">
                    <span className="md:mb-5 mt-2">
                        Showing 1 to {customCommands.length} of {customCommands.length} Commands
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

export default CustomCommands;
