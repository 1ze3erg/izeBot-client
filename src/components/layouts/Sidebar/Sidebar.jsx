import { sidebarMenu } from "../../../config/routes";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
    return (
        <div className="bg-gray-200">
            <ul className="flex flex-col md:flex-col lg:flex-row">
                {sidebarMenu.map((elem, idx) => (
                    <SidebarMenu key={idx} name={elem.name} to={elem.to} icon={elem.icon} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
