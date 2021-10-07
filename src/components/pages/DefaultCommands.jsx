import { useEffect } from "react";
import axios from "../../config/axios";
import { useContentContext } from "../../contexts/ContentContext";
import Sidebar from "../layouts/Sidebar/Sidebar";
import Table from "../ui/Table/Table";
import Thead from "../ui/Table/Thead";

function DefaultCommands() {
    const { defaultCommands, setDefaultCommands } = useContentContext();

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

    const th = [
        { name: "Command", width: "w-2/12" },
        { name: "Description", width: "w-5/12" },
        { name: "Response", width: "w-5/12" },
    ];

    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400 p-5">
                <h1 className="text-center text-5xl font-semibold pt-5 pb-10">Default Commands</h1>

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
                    <tbody>
                        {defaultCommands.map((elem) => {
                            return (
                                <tr>
                                    <td>
                                        <p className="text-lg">{elem.command}</p>
                                    </td>
                                    <td>
                                        <p className="text-md">{elem.description}</p>
                                    </td>
                                    <td>
                                        <p className="text-lg">{elem.response}</p>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <div className="flex justify-between items-center mt-2 md:flex-col">
                    <span className="md:mb-5 mt-2">
                        Showing 1 to {defaultCommands.length} of {defaultCommands.length} Commands
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

export default DefaultCommands;
