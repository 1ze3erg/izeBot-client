function MenuLink({ name, href }) {
    return (
        <div>
            <a href={href}>
                <li className="mr-5 md:mr-0 md:border-b-2">
                    <button className={`btn bg-red-700 text-white md:w-full md:rounded-none`}>{name}</button>
                </li>
            </a>
        </div>
    );
}

export default MenuLink;
