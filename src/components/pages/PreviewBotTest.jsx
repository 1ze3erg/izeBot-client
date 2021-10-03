import Sidebar from "../layouts/Sidebar/Sidebar";

function PreviewBotTest() {
    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 h-screen bg-gray-400 flex justify-center items-center">
                <div className="flex flex-col self-stretch py-5">
                    <div className="w-500 h-4/5 rounded-lg border-4 border-gray-500 ring-4 ring-gray-500 bg-gray-700 flex flex-4 flex-col items-center p-5 mb-10">
                        <div className="self-start mb-5 flex items-center">
                            <i className="fas fa-star bg-gray-300 text-indigo-700 px-2 py-2 mr-2 rounded-md"></i>
                            <i className="fas fa-user bg-gray-300 text-indigo-700 px-3 py-2 mr-2 rounded-full"></i>
                            <h3 className="bg-gray-800 text-white px-5 py-1 mr-3 rounded-md">Guest</h3>
                            <p className="text-white">Hello</p>
                        </div>
                        <div className="self-start mb-5 flex items-center">
                            <i className="fas fa-robot bg-gray-300 text-indigo-700 px-2 py-2 mr-2 rounded-md"></i>
                            <h3 className="bg-red-700 text-white px-5 py-1 mr-3 rounded-md">izeBot</h3>
                            <p className="text-white">Hello @Me </p>
                        </div>
                        <div className="self-start mb-5 flex items-center">
                            <i className="fas fa-star bg-gray-300 text-indigo-700 px-2 py-2 mr-2 rounded-md"></i>
                            <i className="fas fa-user bg-gray-300 text-indigo-700 px-3 py-2 mr-2 rounded-full"></i>
                            <h3 className="bg-gray-800 text-white px-5 py-1 mr-3 rounded-md">Guest</h3>
                            <p className="text-white">!now</p>
                        </div>
                        <div className="self-start mb-5 flex items-center">
                            <i className="fas fa-robot bg-gray-300 text-indigo-700 px-2 py-2 mr-2 rounded-md"></i>
                            <h3 className="bg-red-700 text-white px-5 py-1 mr-3 rounded-md">izeBot</h3>
                            <p className="text-white">@Me Today is dd-mm-yyyy</p>
                        </div>
                        <div className="self-start mb-5 flex items-center">
                            <i className="fas fa-star bg-gray-300 text-indigo-700 px-2 py-2 mr-2 rounded-md"></i>
                            <i className="fas fa-user bg-gray-300 text-indigo-700 px-3 py-2 mr-2 rounded-full"></i>
                            <h3 className="bg-gray-800 text-white px-5 py-1 mr-3 rounded-md">Guest</h3>
                            <p className="text-white">!sum 1 2 3 4</p>
                        </div>
                        <div className="self-start mb-5 flex items-center">
                            <i className="fas fa-robot bg-gray-300 text-indigo-700 px-2 py-2 mr-2 rounded-md"></i>
                            <h3 className="bg-red-700 text-white px-5 py-1 mr-3 rounded-md">izeBot</h3>
                            <p className="text-white">@Me Sum of (1,2,3,4) is 10.</p>
                        </div>
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
