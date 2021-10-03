import Sidebar from "../layouts/Sidebar/Sidebar";

function ChatLogs() {
    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400 p-5">
                <h1 className="text-center text-5xl font-semibold pt-5 pb-10">Chat Logs</h1>

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
                            <th className="w-3/12 font-semibold">Date</th>
                            <th className="w-2/12 font-semibold">User</th>
                            <th className="w-7/12 font-semibold">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dec 32, 2022 2:22:22 PM</td>
                            <td>Someone</td>
                            <td>!poll</td>
                        </tr>
                        <tr>
                            <td>Dec 32, 2022 2:22:22 PM</td>
                            <td>Someone</td>
                            <td>!now</td>
                        </tr>
                        <tr>
                            <td>Dec 32, 2022 2:22:22 PM</td>
                            <td>Someone</td>
                            <td>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis odit
                                nobis in corporis maxime iste aspernatur nesciunt alias suscipit.
                            </td>
                        </tr>
                        <tr>
                            <td>Dec 32, 2022 2:22:22 PM</td>
                            <td>Someone</td>
                            <td>!commands</td>
                        </tr>
                        <tr>
                            <td>Dec 32, 2022 2:22:22 PM</td>
                            <td>Someone</td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, tempore.</td>
                        </tr>
                        <tr>
                            <td>Dec 32, 2022 2:22:22 PM</td>
                            <td>Someone</td>
                            <td>Lorem ipsum dolor sit amet.</td>
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
                                md:rounded-none
                                md:border-2
                            "
                        >
                            First
                        </li>
                        <li className="cursor-pointer hover:bg-gray-500 border-2 border-black border-r-0 px-4 py-2 md:border-2">
                            Previous
                        </li>
                        <li className="cursor-pointer hover:bg-gray-500 border-2 border-black border-r-0 px-4 py-2 md:border-2">
                            1
                        </li>
                        <li className="cursor-pointer hover:bg-gray-500 border-2 border-black border-r-0 px-4 py-2 md:border-2">
                            2
                        </li>
                        <li className="cursor-pointer hover:bg-gray-500 border-2 border-black border-r-0 px-4 py-2 md:border-2">
                            3
                        </li>
                        <li className="cursor-pointer hover:bg-gray-500 border-2 border-black border-r-0 px-4 py-2 md:border-2">
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
                                md:rounded-none
                                md:border-2
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

export default ChatLogs;
