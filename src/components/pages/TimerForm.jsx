import axios from "./../../config/axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useHistory } from "react-router";
import { useContentContext } from "../../contexts/ContentContext";
import Sidebar from "../layouts/Sidebar/Sidebar";
import ErrFeedback from "../ui/ErrFeedback";

function TimerForm() {
    const { setTimers } = useContentContext();
    const [timer, setTimer] = useState({ timerName: "", response: "", interval: "", description: "" });
    const [err, setErr] = useState({ timerName: "", response: "", interval: "" });
    const history = useHistory();

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
            setTimer((currentState) => ({ ...currentState, [e.target.name]: "" }));
        } else {
            setErr((currentState) => {
                delete currentState[e.target.name];
                return currentState;
            });
            setTimer((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
        }
    };

    const submitAddTimer = async (e) => {
        try {
            e.preventDefault();
            Object.keys(timer).forEach((elem) => {
                if (elem === "command" || elem === "response") {
                    if (timer[elem] === "") {
                        setErr((currentState) => ({ ...currentState, [elem]: `${elem} is required` }));
                    }
                }
            });
            if (!err.timerName && !err.response && !err.interval) {
                const newTimer = await axios.post("/timers", { ...timer, interval: `${timer.interval * 60000}` });
                setTimers((currentState) => [newTimer, ...currentState]);
                await Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your timers has been added",
                    showConfirmButton: false,
                    timer: 1000,
                });
                history.push("/timers");
            }
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400 flex justify-center items-center py-10 sm:px-5">
                <div className="w-500 md:max-w-md sm:max-w-full bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg p-10 flex flex-shrink-0 flex-col justify-center items-center">
                    <h1 className="w-full text-center text-3xl font-semibold mb-5">Timer Form</h1>
                    <form className="w-full flex flex-col items-center" onSubmit={submitAddTimer}>
                        <div className="w-full mb-5 flex flex-col">
                            <label htmlFor="timer-name" className="mb-2">
                                Timer Name
                            </label>
                            <input
                                type="text"
                                name="timerName"
                                id="timerName"
                                className="p-3 text-black rounded-md"
                                value={timer.timerName}
                                onChange={handleChangeInput}
                            />
                            {err.timerName && <ErrFeedback err={err.timerName} />}
                        </div>
                        <div className="w-full mb-5 flex flex-col">
                            <label htmlFor="response" className="mb-2">
                                response
                            </label>
                            <input
                                type="text"
                                name="response"
                                id="response"
                                className="p-3 text-black rounded-md"
                                value={timer.response}
                                onChange={handleChangeInput}
                            />
                            {err.response && <ErrFeedback err={err.response} />}
                        </div>
                        <div className="w-full mb-5 flex flex-col">
                            <label htmlFor="interval" className="mb-2">
                                Interval (Min)
                            </label>
                            <input
                                type="text"
                                name="interval"
                                id="interval"
                                className="p-3 text-black rounded-md"
                                value={timer.interval}
                                onChange={handleChangeInput}
                            />
                            {err.interval && <ErrFeedback err={err.interval} />}
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
                                value={timer.description}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="flex justify-between w-full">
                            <button type="submit" className="btn bg-green-600 w-full text-center mr-2">
                                Add Timer
                            </button>
                            <button
                                type="button"
                                className="btn bg-red-700 w-full text-center"
                                onClick={() => history.push("/timers")}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TimerForm;
