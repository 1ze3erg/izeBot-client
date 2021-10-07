import Sidebar from "../layouts/Sidebar/Sidebar";

function PreviewBotTest() {
    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 h-screen bg-gray-400 flex justify-center items-center">
                <div className="flex flex-col self-stretch py-5">
                    <div className="w-500 h-500 rounded-lg border-4 border-gray-500 ring-4 ring-gray-500 bg-gray-700 flex flex-4 flex-col items-center p-5 mb-10">
                        <div>Hello</div>
                    </div>

                    <div className="w-500 rounded-lg border-4 border-gray-500 ring-4 ring-gray-500 bg-gray-700 flex flex-1 flex-col items-center py-2">
                        <form className="w-full h-full flex justify-between items-center">
                            <i className="fas fa-user bg-gray-300 text-indigo-700 px-4 py-3 mx-2 rounded-full"></i>
                            <input
                                type="text"
                                className="flex-grow p-3 rounded-md bg-gray-400 focus:bg-black text-white"
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
