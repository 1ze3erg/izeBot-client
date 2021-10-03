import { Link } from "react-router-dom";
import Sidebar from "../layouts/Sidebar/Sidebar";

function TimerForm() {
    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400 flex justify-center items-center py-10 sm:px-5">
                <div className="w-500 md:max-w-md sm:max-w-full bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg p-10 flex flex-shrink-0 flex-col justify-center items-center">
                    <h1 className="w-full text-center text-3xl font-semibold mb-5">Timer Form</h1>
                    <form className="w-full flex flex-col items-center">
                        <div className="w-full mb-5 flex flex-col">
                            <label htmlFor="timer-name" className="mb-2">
                                Timer Name
                            </label>
                            <input
                                type="text"
                                name="timer-name"
                                id="timer-name"
                                className="p-3 text-black rounded-md"
                            />
                        </div>
                        <div className="w-full mb-5 flex flex-col">
                            <label htmlFor="response" className="mb-2">
                                response
                            </label>
                            <input type="text" name="response" id="response" className="p-3 text-black rounded-md" />
                        </div>
                        <div className="w-full mb-5 flex flex-col">
                            <label htmlFor="interval" className="mb-2">
                                Interval (Min)
                            </label>
                            <input type="text" name="interval" id="interval" className="p-3 text-black rounded-md" />
                        </div>
                        <div className="w-full mb-7 flex flex-col">
                            <label htmlFor="description" className="mb-2">
                                Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className="p-3 text-black rounded-md"
                            />
                        </div>
                        <div className="flex justify-between w-full">
                            <Link to="/timers" className="btn bg-green-600 w-full text-center mr-2">
                                Add Timer
                            </Link>
                            <Link to="/timers" className="btn bg-red-700 w-full text-center">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TimerForm;
