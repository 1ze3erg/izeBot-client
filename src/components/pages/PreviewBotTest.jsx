import axios from "../../config/axios";
import { useEffect, useRef, useState } from "react";
import { getAvatar, getDisplayName } from "../../helpers/localStorage";
import Sidebar from "../layouts/Sidebar/Sidebar";
import Chat from "../ui/Chat";
import { defaultCommand } from "../../helpers/izeBot";

function PreviewBotTest() {
    const chatElem = useRef(null);
    const [chats, setChats] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [customCommandObj, setCustomCommandObj] = useState({});
    const [timerArr, setTimerArr] = useState([]);

    useEffect(() => {
        if (chatElem) {
            chatElem.current.addEventListener("DOMNodeInserted", (event) => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: "smooth" });
            });
        }
    }, []);

    useEffect(() => {
        axios
            .get("/izeBot/custom-command")
            .then((res) => setCustomCommandObj(res.data))
            .catch((err) => console.dir(err));
        axios
            .get("/izeBot/timer")
            .then((res) => setTimerArr(res.data))
            .catch((err) => console.dir(err));
    }, []);

    useEffect(() => {
        const timerId = [];
        timerArr.forEach((elem) => {
            const id = setInterval(() => {
                setChats((currentState) => [
                    ...currentState,
                    { displayName: "izeBot", message: elem.response, role: "BOT" },
                ]);
            }, elem.interval);
            timerId.push(id);
        });
        return () => {
            timerId.forEach((elem) => {
                clearInterval(elem);
            });
        };
    }, [timerArr]);

    const handleChangeInput = (e) => {
        setInputMessage(e.target.value);
    };

    const submitSendMessage = async (e) => {
        e.preventDefault();

        const [text, option] = inputMessage.split(" ");

        let botMessage = customCommandObj[text.toLowerCase()] || defaultCommand[text.toLowerCase()];

        if (botMessage?.type === "api") {
            const res = await axios.get(botMessage.response);
            console.log(res.data);
            botMessage = `??????????????????????????????????????????????????????????????? ${new Date(res.data[0]?.txn_date).toLocaleDateString("th-TH", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })} ??????????????? ${res.data[0]?.new_case} ??????`;
        } else if (botMessage?.type === "function") {
            if (option) {
                botMessage = botMessage.response(+option.split("-")[0], +option.split("-")[1]);
            } else {
                botMessage = botMessage.response();
            }
        } else if (botMessage?.type === "javascript" || botMessage) {
            botMessage = botMessage.response;
        } 

        if (inputMessage.trim() !== "") {
            setChats((currentState) => [
                ...currentState,
                { displayName: getDisplayName(), message: inputMessage, role: "MEMBER" },
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
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 h-screen bg-gray-400 flex justify-center items-center">
                <div className="flex flex-col self-stretch py-5">
                    <div
                        className="w-500 h-500 rounded-lg border-4 border-gray-500 ring-4 ring-gray-500 bg-gray-700 flex flex-4 flex-col items-center p-5 mb-10 overflow-y-auto overflow-x-hidden"
                        ref={chatElem}
                    >
                        {chats.map((elem, idx) => (
                            <Chat key={idx} displayName={elem.displayName} message={elem.message} role={elem.role} />
                        ))}
                    </div>

                    <div className="w-500 rounded-lg border-4 border-gray-500 ring-4 ring-gray-500 bg-gray-700 flex flex-1 flex-col items-center py-2">
                        <form className="w-full h-full flex justify-between items-center" onSubmit={submitSendMessage}>
                            <img
                                src={getAvatar()}
                                className="m-2 rounded-md w-12 h-12"
                                title={getDisplayName()}
                                alt="avatar"
                            />
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
            </div>
        </div>
    );
}

export default PreviewBotTest;
