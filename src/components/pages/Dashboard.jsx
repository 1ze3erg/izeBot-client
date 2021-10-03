import Sidebar from "../layouts/Sidebar/Sidebar";

function Dashboard() {
    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400">
                <h1 className="text-center text-5xl font-semibold pt-5">Dashboard</h1>
                <img src="https://picsum.photos/id/20/500" alt="dashboard" className="p-5" />
            </div>
        </div>
    );
}

export default Dashboard;
