import { Link } from "react-router-dom";
import { sidebarMenu } from "../../../config/routes";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
    return (
        <div className="bg-gray-200">
            <ul className="flex flex-col md:flex-col lg:flex-row">
                {true &&
                    sidebarMenu.map((elem, idx) => (
                        <SidebarMenu key={idx} name={elem.name} to={elem.to} icon={elem.icon} />
                    ))}
                {false && (
                    <>
                        <li className="text-center py-2 font-bold text-xl">What's izeBot</li>
                        <Link to="/docs" className="hover:bg-gray-300 flex items-center">
                            <li className="p-3 hover:bg-gray-300 flex items-center">Introduction</li>
                        </Link>
                        <Link to="/docs" className="hover:bg-gray-300 flex items-center">
                            <li className="p-3 hover:bg-gray-300 flex items-center">Dashboard</li>
                        </Link>
                        <Link to="/docs" className="hover:bg-gray-300 flex items-center">
                            <li className="p-3 hover:bg-gray-300 flex items-center">Preview Bot Test</li>
                        </Link>
                        <li className="text-center py-2 font-bold text-xl">izeBot's Setting</li>
                        <Link to="/docs" className="hover:bg-gray-300 flex items-center">
                            <li className="p-3 hover:bg-gray-300 flex items-center">Default Commands</li>
                        </Link>
                        <Link to="/docs" className="hover:bg-gray-300 flex items-center">
                            <li className="p-3 hover:bg-gray-300 flex items-center">Custom Commands</li>
                        </Link>
                        <Link to="/docs" className="hover:bg-gray-300 flex items-center">
                            <li className="p-3 hover:bg-gray-300 flex items-center">Timer</li>
                        </Link>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Sidebar;
