import { NavLink } from "react-router-dom";

function SidebarMenu({ name, to, icon }) {
    return (
        <NavLink to={to} activeClassName="bg-indigo-200" className="hover:bg-gray-300 flex items-center">
            <li className="p-3 flex items-center">
                <i className={`fas ${icon} mr-2 lg:my-auto`}></i>
                <span>{name}</span>
            </li>
        </NavLink>
    );
}

export default SidebarMenu;
