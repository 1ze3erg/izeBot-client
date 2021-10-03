import Sidebar from "../layouts/Sidebar/Sidebar";

function DefaultCommands() {
    return (
        <div className="grid grid-cols-5 lg:grid-cols-1 md:contents">
            <Sidebar />
            <div className="col-span-4 bg-gray-400 p-5">
                <h1 className="text-center text-5xl font-semibold pt-5 pb-10">Default Commands</h1>
                <table className="block mx-auto text-center table-auto bg-white md:overflow-auto">
                    <thead>
                        <tr className="text-xl">
                            <th className="w-0.5/12 font-semibold">Status</th>
                            <th className="w-2/12 font-semibold">Command</th>
                            <th className="w-9/12 font-semibold">Description</th>
                            <th className="w-0.5/12 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-on"></i>
                            </td>
                            <td>!command1</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-on"></i>
                            </td>
                            <td>!command2</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-on"></i>
                            </td>
                            <td>!command3</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-on"></i>
                            </td>
                            <td>!command4</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-on"></i>
                            </td>
                            <td>!command5</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-toggle-off"></i>
                            </td>
                            <td>!command6</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className="border border-black">
                            <td>
                                <i className="fas fa-toggle-off"></i>
                            </td>
                            <td>!command7</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className="border border-black">
                            <td>
                                <i className="fas fa-toggle-off"></i>
                            </td>
                            <td>!command8</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam!</td>
                            <td>
                                <button>
                                    <i className="far fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DefaultCommands;
