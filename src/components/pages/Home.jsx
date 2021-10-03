import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="bg-gray-600 flex justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center text-white">
                    <h1 className="mb-5 text-5xl font-bold md:mb-2 sm:text-3xl">Welcome to izeBot</h1>
                    <p className="mb-5 p-10 text-center md:mb-2 md:p-5 sm:p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi adipisci quasi
                        temporibus a quibusdam tenetur, reprehenderit suscipit sequi, sunt autem nesciunt amet libero
                        architecto recusandae ratione corrupti ea? Esse id distinctio sunt quasi eaque ratione repellat
                        veniam! Veniam obcaecati adipisci libero totam illo quod velit non eveniet sapiente quas ipsum,
                        necessitatibus itaque corrupti esse et nemo nostrum deserunt dolorum expedita voluptate dolores
                        quam soluta aut sit. Ut aperiam unde excepturi ipsam harum quo saepe, natus assumenda corporis
                        id perspiciatis quas totam illo atque necessitatibus voluptatum dolore, est temporibus quia
                        explicabo. Nihil illum fugiat, reprehenderit molestiae nemo accusantium deleniti quasi.
                    </p>
                    <Link to="/try-bot">
                        <button className="mb-5 py-5 btn border-2 border-white w-60 text-xl hover:bg-gray-500 md:mb-2 sm:py-2 sm:w-48">
                            Get Start
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="mb-5 btn bg-indigo-400 hover:bg-indigo-300 text-white md:mb-0">
                            Register
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-400">
                <h1 className="font-medium text-center text-3xl pt-5">What's Include</h1>
                <div className="grid grid-cols-3 gap-8 p-7 md:grid-cols-2 sm:grid-cols-1 sm:gap-3">
                    <div className="bg-indigo-300 border-4 border-indigo-700 ring-4 rounded-xl flex flex-col justify-center items-center md:justify-between">
                        <img src="https://picsum.photos/500" className="rounded-t-lg" alt="card-img" />
                        <h3 className="text-xl text-center font-semibold pt-3">Dashboard</h3>
                        <p className="text-center p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui?
                        </p>
                    </div>
                    <div className="bg-indigo-300 border-4 border-indigo-700 ring-4 rounded-xl flex flex-col justify-center items-center md:justify-between">
                        <img src="https://picsum.photos/500" className="rounded-t-lg" alt="card-img" />
                        <h3 className="text-xl text-center font-semibold pt-3">Default Commands</h3>
                        <p className="text-center p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui?
                        </p>
                    </div>
                    <div className="bg-indigo-300 border-4 border-indigo-700 ring-4 rounded-xl flex flex-col justify-center items-center md:justify-between">
                        <img src="https://picsum.photos/500" className="rounded-t-lg" alt="card-img" />
                        <h3 className="text-xl text-center font-semibold pt-3">Custom Commands</h3>
                        <p className="text-center p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui?
                        </p>
                    </div>
                    <div className="bg-indigo-300 border-4 border-indigo-700 ring-4 rounded-xl flex flex-col justify-center items-center md:justify-between">
                        <img src="https://picsum.photos/500" className="rounded-t-lg" alt="card-img" />
                        <h3 className="text-xl font-semibold pt-3">Timer</h3>
                        <p className="text-center p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui?
                        </p>
                    </div>
                    <div className="bg-indigo-300 border-4 border-indigo-700 ring-4 rounded-xl flex flex-col justify-center items-center">
                        <img src="https://picsum.photos/500" className="rounded-t-lg" alt="card-img" />
                        <h3 className="text-xl font-semibold pt-3">Preview Bot Test</h3>
                        <p className="text-center p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui?
                        </p>
                    </div>
                    <div className="bg-indigo-300 border-4 border-indigo-700 ring-4 rounded-xl flex flex-col justify-center items-center md:justify-between">
                        <img src="https://picsum.photos/500" className="rounded-t-lg" alt="card-img" />
                        <h3 className="text-xl font-semibold pt-3">Intregrations</h3>
                        <p className="text-center p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui?
                        </p>
                    </div>
                    <div className="bg-indigo-300 border-4 border-indigo-700 ring-4 rounded-xl flex flex-col justify-center items-center md:justify-between">
                        <img src="https://picsum.photos/500" className="rounded-t-lg" alt="card-img" />
                        <h3 className="text-xl font-semibold pt-3">Chat Logs</h3>
                        <p className="text-center p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui?
                        </p>
                    </div>
                    <div className="bg-indigo-300 border-4 border-indigo-700 ring-4 rounded-xl flex flex-col justify-center items-center md:justify-between">
                        <img src="https://picsum.photos/500" className="rounded-t-lg" alt="card-img" />
                        <h3 className="text-xl font-semibold pt-3">Easy to use</h3>
                        <p className="text-center p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui?
                        </p>
                    </div>
                    <div className="bg-indigo-300 border-4 border-indigo-700 ring-4 rounded-xl flex flex-col justify-center items-center md:justify-between">
                        <img src="https://picsum.photos/500" className="rounded-t-lg" alt="card-img" />
                        <h3 className="text-xl font-semibold pt-3">Docs</h3>
                        <p className="text-center p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui?
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
