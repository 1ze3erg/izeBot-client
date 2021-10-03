import { Link } from "react-router-dom";

function TryBot() {
    return (
        <>
            <div className="bg-gray-600 text-center text-white">
                <h1 className="text-5xl font-semibold pt-5">Preview Bot Test</h1>
                <p className="py-7 text-lg">
                    You can get more feature &#10132;{" "}
                    <Link to="/register">
                        <button className="btn bg-indigo-400 hover:bg-indigo-300 text-white mx-2">Register</button>
                    </Link>{" "}
                    and{" "}
                    <Link to="/login">
                        <button className="btn bg-indigo-700 text-white mx-2">Sign in</button>
                    </Link>
                </p>
            </div>

            <div className="bg-gray-400 grid grid-cols-2 lg:grid-cols-none lg:grid-rows-2">
                <div className="flex flex-col py-7 px-5 md:max-w-md lg:max-w-lg lg:w-full lg:mx-auto lg:p-0 lg:py-5 sm:max-w-full">
                    <div className="w-full h-4/5 rounded-lg border-4 border-gray-500 ring-4 ring-gray-500 bg-gray-700 flex flex-4 flex-col items-center p-5 mb-10">
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

                    <div className="w-full rounded-lg border-4 border-gray-500 ring-4 ring-gray-500 bg-gray-700 flex flex-1 flex-col items-center lg:py-2">
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
