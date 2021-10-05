import axios from "./../../config/axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useHistory } from "react-router";
import { useContentContext } from "../../contexts/ContentContext";
import Sidebar from "../layouts/Sidebar/Sidebar";
import ErrFeedback from "../ui/ErrFeedback";

function CommandForm() {
    const { setCustomCommands } = useContentContext();
    const [custom, setCustom] = useState({ command: "", response: "", description: "" });
    const [err, setErr] = useState({ command: " ", response: " " });
    const history = useHistory();

    const handleChangeInput = (e) => {
        if (e.target.name !== "description" && e.target.value.trim() === "") {
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
            setCustom((currentState) => ({ ...currentState, [e.target.name]: "" }));
        } else {
            setErr((currentState) => {
                delete currentState[e.target.name];
                return currentState;
            });
            setCustom((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
        }
    };

    const submitAddCommand = async (e) => {
        try {
            e.preventDefault();
            Object.keys(custom).forEach((elem) => {
                if (elem === "command" || elem === "response") {
                    if (custom[elem] === "") {
                        setErr((currentState) => ({ ...currentState, [elem]: `${elem} is required` }));
                    }
                }
            });
            if (!err.command && !err.response) {
                const newCustom = await axios.post("/custom-commands", custom);
                setCustomCommands((currentState) => [newCustom, ...currentState]);
                await Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your custom commands has been added",
                    showConfirmButton: false,
                    timer: 1000,
                });
                history.push("/custom-commands");
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
                    <h1 className="w-full text-center text-3xl font-semibold mb-5">Command Form</h1>
                    <form className="w-full flex flex-col items-center" onSubmit={submitAddCommand}>
                        <div className="w-full mb-5 flex flex-col">
                            <label htmlFor="command" className="mb-2">
                                Command
                            </label>
                            <input
                                type="text"
                                name="command"
                                id="command"
                                className="p-3 text-black rounded-md"
                                value={custom.command}
                                onChange={handleChangeInput}
                            />
                            {err.command && <ErrFeedback err={err.command} />}
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
                                value={custom.response}
                                onChange={handleChangeInput}
                            />
                            {err.response && <ErrFeedback err={err.response} />}
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
                                value={custom.description}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="flex justify-between w-full">
                            <button type="submit" className="btn bg-green-600 w-full text-center mr-2">
                                Add Command
                            </button>
                            <button
                                type="button"
                                className="btn bg-red-700 w-full text-center"
                                onClick={() => history.push("/custom-commands")}
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

export default CommandForm;
