import { Link } from "react-router-dom";

function Brand({ name }) {
    return (
        <Link to="/" className="text-white text-5xl font-bold">
            <li className="mr-6 ml-3 flex-center md:w-full md:text-center md:mr-0 md:ml-0 md:mb-2">{name}</li>
        </Link>
    );
}

export default Brand;
