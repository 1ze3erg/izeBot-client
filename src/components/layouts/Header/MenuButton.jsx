import { Link } from "react-router-dom";

function MenuButton({ name, bgColor, textColor, to, onClick }) {
    return (
        <Link to={to}>
            <li className="mr-5 md:mr-0 md:border-b-2" onClick={onClick}>
                <button className={`btn ${bgColor} ${textColor} md:w-full md:rounded-none`}>{name}</button>
            </li>
        </Link>
    );
}

export default MenuButton;
