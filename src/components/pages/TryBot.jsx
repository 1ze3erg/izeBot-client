import { useState } from "react";
import { Link } from "react-router-dom";
import { command } from "../../helpers/izeBot";
import Chat from "../ui/Chat";

function TryBot() {
    const [chats, setChats] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    const handleChangeInput = (e) => {
        setInputMessage(e.target.value);
    };

    const submitSendMessage = (e) => {
        e.preventDefault();

        const [text, option] = inputMessage.split(" ");
        console.log(option.split("-"));

        let botMessage = command[text];

        if (typeof botMessage === "function") {
            botMessage = botMessage(+option.split("-")[0], +option.split("-")[1]);
        }

        if (inputMessage.trim() !== "") {
            setChats((currentState) => [
                ...currentState,
                { displayName: "GUEST", message: inputMessage, role: "MEMBER" },
            ]);
            if (botMessage) {
                setTimeout(() => {
                    setChats((currentState) => [
                        ...currentState,
                        { displayName: "izeBot", message: botMessage, role: "BOT" },
                    ]);
                }, 300);
            }
            setInputMessage("");
        }
    };

    return (
        <>
            <div className="bg-gray-600 text-center text-white">
                <h1 className="text-5xl font-semibold pt-5">Preview Bot Test</h1>
                <p className="py-7 text-lg">
                    You can get more feature &#10132;{" "}
                    <Link to="/register">
                        <button className="btn bg-indigo-400 hover:bg-indigo-300 text-white mx-2">Register</button>
                    </Link>
                    and
                    <Link to="/login">
                        <button className="btn bg-indigo-700 text-white mx-2">Sign in</button>
                    </Link>
                </p>
            </div>

            <div className="bg-gray-400 grid grid-cols-2 lg:grid-cols-none lg:grid-rows-2">
                <div className="flex flex-col py-7 px-5 md:max-w-md lg:max-w-lg lg:w-full lg:mx-auto lg:p-0 lg:py-5 sm:max-w-full">
                    <div className="w-full h-500 rounded-lg border-4 border-gray-500 ring-4 ring-gray-500 bg-gray-700 flex flex-4 flex-col items-center p-5 mb-10 overflow-y-auto overflow-x-hidden">
                        {chats.map((elem, idx) => (
                            <Chat key={idx} displayName={elem.displayName} message={elem.message} role={elem.role} />
                        ))}
                    </div>

                    <div className="w-full h-500 rounded-lg border-4 border-gray-500 ring-4 ring-gray-500 bg-gray-700 flex flex-1 flex-col items-center lg:py-2">
                        <form className="w-full h-full flex justify-between items-center" onSubmit={submitSendMessage}>
                            <i className="fas fa-user bg-gray-300 text-indigo-700 px-4 py-3 mx-2 rounded-md"></i>
                            <input
                                type="text"
                                className="flex-grow p-3 rounded-md bg-gray-400 focus:bg-black text-white"
                                value={inputMessage}
                                onChange={handleChangeInput}
                            />
                            <button type="submit" className="btn mx-2 bg-indigo-400 hover:bg-indigo-300 text-white">
                                send
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex justify-center items-center py-7 px-5 md:max-w-md lg:max-w-lg lg:w-full lg:mx-auto lg:p-0 lg:py-5 sm:max-w-full">
                    <div className="h-full w-full flex flex-col justify-start items-center bg-white px-10 rounded-lg">
                        <h1 className="text-3xl py-5">Command List</h1>
                        <ol className="list-decimal text-center">
                            <li>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, vitae! Sunt quidem ad
                                natus aliquid eaque nam quaerat, assumenda excepturi.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, vitae! Sunt quidem ad
                                natus aliquid eaque nam quaerat, assumenda excepturi.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, vitae! Sunt quidem ad
                                natus aliquid eaque nam quaerat, assumenda excepturi.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, vitae! Sunt quidem ad
                                natus aliquid eaque nam quaerat, assumenda excepturi.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, vitae! Sunt quidem ad
                                natus aliquid eaque nam quaerat, assumenda excepturi.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, vitae! Sunt quidem ad
                                natus aliquid eaque nam quaerat, assumenda excepturi.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, vitae! Sunt quidem ad
                                natus aliquid eaque nam quaerat, assumenda excepturi.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, vitae! Sunt quidem ad
                                natus aliquid eaque nam quaerat, assumenda excepturi.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TryBot;
