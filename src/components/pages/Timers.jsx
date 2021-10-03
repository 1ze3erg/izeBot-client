import { Link } from "react-router-dom";
import Sidebar from "../layouts/Sidebar/Sidebar";

function Timers() {
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

                <table className="block mx-auto text-center table-auto bg-white md:overflow-auto">
                    <thead>
                        <tr className="text-xl">
                            <th className="w-0.5/12 font-semibold">Status</th>
                            <th className="w-1/12 font-semibold">Timer Name</th>
                            <th className="w-9/12 font-semibold">Response</th>
                            <th className="w-1/12 font-semibold">Interval</th>
                            <th className="w-0.5/12 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-on"></i>
                            </td>
                            <td>Timer1</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>15 mins</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                                <button>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-off"></i>
                            </td>
                            <td>Timer2</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>30 mins</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                                <button>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-on"></i>
                            </td>
                            <td>Timer3</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>45 mins</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                                <button>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-off"></i>
                            </td>
                            <td>Timer4</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>60 mins</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                                <button>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-on"></i>
                            </td>
                            <td>Timer5</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>90 mins</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                                <button>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-off"></i>
                            </td>
                            <td>Timer6</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>120 mins</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                                <button>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-between items-center mt-2 md:flex-col">
                    <span className="md:mb-5 mt-2">Showing 1 to 10 of 50 Commands</span>
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
