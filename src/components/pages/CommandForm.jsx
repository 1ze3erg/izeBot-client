import { Link } from "react-router-dom";
import Sidebar from "../layouts/Sidebar/Sidebar";

function CommandForm() {
    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400 flex justify-center items-center py-10 sm:px-5">
                <div className="w-500 md:max-w-md sm:max-w-full bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg p-10 flex flex-shrink-0 flex-col justify-center items-center">
                    <h1 className="w-full text-center text-3xl font-semibold mb-5">Command Form</h1>
                    <form className="w-full flex flex-col items-center">
                        <div className="w-full mb-5 flex flex-col">
                            <label htmlFor="command" className="mb-2">
                                Command
                            </label>
                            <input type="text" name="command" id="command" className="p-3 text-black rounded-md" />
                        </div>
                        <div className="w-full mb-5 flex flex-col">
                            <label htmlFor="response" className="mb-2">
                                response
                            </label>
                            <input type="text" name="response" id="response" className="p-3 text-black rounded-md" />
                        </div>
                        <div className="w-full mb-7 flex flex-col">
                            <label htmlFor="description" className="mb-2">
                                description
                            </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className="p-3 text-black rounded-md"
                            />
                        </div>
                        <div className="flex justify-between w-full">
                            <Link to="/custom-commands" className="btn bg-green-600 w-full text-center mr-2">
                                Add Command
                            </Link>
                            <Link to="/custom-commands" className="btn bg-red-700 w-full text-center">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CommandForm;
