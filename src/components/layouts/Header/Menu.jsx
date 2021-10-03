import { Link } from "react-router-dom";

function Menu({ name, textColor }) {
    return (
        <Link to="/home" className={`${textColor} text-xl`}>
            <li className="mr-5 p-2.5 rounded flex-center hover:bg-gray-700 md:w-full md:text-center md:mr-0 md:border-b-2 md:rounded-none">
                {name}
            </li>
        </Link>
    );
}

export default Menu;
