import { useState } from "react";
import { isEmail } from "validator";
import { useAppContext } from "../../contexts/AppContext";
import { setAvatar, setDisplayName, setToken } from "../../helpers/localStorage";
import axios from "../../config/axios";
import ErrFeedback from "../ui/ErrFeedback";

function Login() {
    const { setAuth } = useAppContext();
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });
    const [err, setErr] = useState({ email: "", password: "" });

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
            setLoginInput((currentState) => ({ ...currentState, [e.target.name]: "" }));
        } else if (e.target.name === "email" && !isEmail(e.target.value)) {
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is invalid` }));
            setLoginInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
        } else {
            setErr((currentState) => {
                delete currentState[e.target.name];
                return currentState;
            });
            setLoginInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
        }
    };

    const submitLogin = async (e) => {
        try {
            e.preventDefault();
            Object.keys(loginInput).forEach((elem) => {
                if (loginInput[elem] === "") {
                    setErr((currentState) => ({ ...currentState, [elem]: `${elem} is required` }));
                }
            });
            if (!err.email && !err.password) {
                const res = await axios.post("/users/login", loginInput);
                setToken(res.data.token);
                setAvatar(res.data.avatar);
                setDisplayName(res.data.displayName);
                setAuth(true);
            }
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="bg-gray-400 flex flex-col justify-center items-center py-10 sm:px-5">
            <div className="w-500 md:max-w-md sm:max-w-full bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg p-10 flex flex-col justify-center items-center">
                <h1 className="w-full text-center text-3xl font-semibold mb-5">Login</h1>
                <form className="w-full mb-7 flex flex-col items-center" onSubmit={submitLogin}>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="email" className="mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="p-3 text-black rounded-md"
                            value={loginInput.email}
                            onChange={handleChangeInput}
                        />
                        {err.email && <ErrFeedback err={err.email} />}
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="password" className="mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="p-3 text-black rounded-md"
                            value={loginInput.password}
                            onChange={handleChangeInput}
                        />
                        {err.password && <ErrFeedback err={err.password} />}
                    </div>
                    <button type="submit" className="btn bg-indigo-400 w-full text-center">
                        Sign in
                    </button>
                </form>
                <div className="bg-white h-1 w-full mb-2"></div>
                <p>Or</p>
                <p className="mb-7">Sign in with</p>
                <div className="w-full text-4xl flex justify-between">
                    <i className="fab fa-twitch"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-facebook"></i>
                </div>
            </div>
        </div>
    );
}

export default Login;
