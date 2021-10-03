import Sidebar from "../layouts/Sidebar/Sidebar";

function Intregrations() {
    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400 p-5">
                <h1 className="text-center text-5xl font-semibold pt-5 pb-10">Intregrations</h1>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
                    <div className="bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg text-center p-5">
                        <i className="fab fa-twitch text-5xl mb-3"></i>
                        <h2 className="font-bold text-2xl">Twitch</h2>
                        <p className="mb-5">Status: Connected</p>
                        <button className="btn bg-red-700">disconnect</button>
                    </div>
                    <div className="bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg text-center p-5">
                        <i className="fab fa-youtube text-5xl mb-3"></i>
                        <h2 className="font-bold text-2xl">Youtube</h2>
                        <p className="mb-5">Status: Not connect</p>
                        <button className="btn bg-green-500">Connect</button>
                    </div>
                    <div className="bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg text-center p-5">
                        <i className="fab fa-facebook text-5xl mb-3"></i>
                        <h2 className="font-bold text-2xl">Facebook Gaming</h2>
                        <p className="mb-5">Status: Not connect</p>
                        <button className="btn bg-green-500">Connect</button>
                    </div>
                    <div className="bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg text-center p-5">
                        <i className="fab fa-facebook-messenger text-5xl mb-3"></i>
                        <h2 className="font-bold text-2xl">Facebook Massenger</h2>
                        <p className="mb-5">Status: Not connect</p>
                        <button className="btn bg-green-500">Connect</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intregrations;
