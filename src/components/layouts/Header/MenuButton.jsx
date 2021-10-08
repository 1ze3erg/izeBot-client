import { Link } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import { removeAvatar, removeDisplayName, removeToken } from "../../../helpers/localStorage";

function MenuButton({ name, bgColor, textColor, to }) {
    const { setAuth } = useAppContext();

    const clickSignOut = () => {
        if (name === "Sign out") {
            setAuth(false);
            removeToken();
            removeAvatar();
            removeDisplayName();
        }
    };

    return (
        <Link to={to}>
            <li className="mr-5 md:mr-0 md:border-b-2" onClick={clickSignOut}>
                <button className={`btn ${bgColor} ${textColor} md:w-full md:rounded-none`}>{name}</button>
            </li>
        </Link>
    );
}

export default MenuButton;
