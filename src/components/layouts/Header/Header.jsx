import { Link } from "react-router-dom";
import { IZECHAT_URL } from "../../../config/env";
import { createMenu } from "../../../config/routes";
import { useAppContext } from "../../../contexts/AppContext";
import { getAvatar } from "../../../helpers/localStorage";
import Brand from "./Brand";
import MenuButton from "./MenuButton";
import MenuLink from "./MenuLink";

function Header() {
    const { auth, setAuth } = useAppContext();
    const { leftMenu, rightMenu } = createMenu(auth, setAuth);
    return (
        <div className="bg-gray-800 p-3 md:p-0">
            <ul className="flex justify-center items-center md:flex-col md:items-stretch">
                <div className="flex flex-grow items-center md:flex-col md:items-stretch">
                    <Brand name="izeBot" />
                    {leftMenu.map((elem, idx) => (
                        <MenuButton
                            name={elem.name}
                            bgColor={elem.bgColor}
                            textColor={elem.textColor}
                            to={elem.to}
                            key={idx}
                        />
                    ))}
                </div>
                <div className="flex flex-grow justify-end items-center md:flex-col md:items-stretch">
                    <MenuLink name="izeChat" href={IZECHAT_URL} />
                    {rightMenu.map((elem, idx) => (
                        <MenuButton
                            name={elem.name}
                            bgColor={elem.bgColor}
                            textColor={elem.textColor}
                            to={elem.to}
                            key={idx}
                        />
                    ))}
                    {auth && (
                        <Link to="/profile">
                            <li className="md:hidden">
                                <img src={getAvatar()} className="w-14 rounded-full" alt="profile-avatar" />
                            </li>
                        </Link>
                    )}
                </div>
            </ul>
        </div>
    );
}

export default Header;
