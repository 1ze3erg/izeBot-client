import { useState } from "react";
import { useHistory } from "react-router";
import { isEmail } from "validator";
import axios from "../../config/axios";
import ErrFeedback from "../ui/ErrFeedback";

function Register() {
    const [registerInput, setRegisterInput] = useState({ displayName: "", email: "", password: "", rePassword: "" });
    const [err, setErr] = useState({ displayName: "", email: "", password: "", rePassword: "" });
    const history = useHistory();

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
            setRegisterInput((currentState) => ({ ...currentState, [e.target.name]: "" }));
        } else if (e.target.name === "email" && !isEmail(e.target.value)) {
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is invalid` }));
            setRegisterInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
        } else {
            setErr((currentState) => {
                delete currentState[e.target.name];
                return currentState;
            });
            setRegisterInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
        }
    };

    const submitRegister = async (e) => {
        try {
            e.preventDefault();
            Object.keys(registerInput).forEach((elem) => {
                if (registerInput[elem] === "") {
                    setErr((currentState) => ({ ...currentState, [elem]: `${elem} is required` }));
                }
            });
            if (registerInput.password !== registerInput.rePassword) {
                setErr((currentState) => ({ ...currentState, rePassword: "password and rePassword did not match" }));
            }
            if (!err.displayName && !err.email && !err.password && !err.rePassword) {
                await axios.post("/users/register", registerInput);
                history.push("/login");
            }
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="bg-gray-400 flex justify-center items-center py-10 sm:px-5">
            <div className="w-500 md:max-w-md sm:max-w-full bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg p-10 flex flex-shrink-0 flex-col justify-center items-center">
                <h1 className="w-full text-center text-3xl font-semibold mb-5">Register</h1>
                <form className="w-full mb-7 flex flex-col items-center" onSubmit={submitRegister}>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="display-name" className="mb-2">
                            Display Name
                        </label>
                        <input
                            type="text"
                            name="displayName"
                            id="displayName"
                            className="p-3 text-black rounded-md"
                            value={registerInput.displayName}
                            onChange={handleChangeInput}
                        />
                        {err.displayName && <ErrFeedback err={err.displayName} />}
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="email" className="mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="p-3 text-black rounded-md"
                            value={registerInput.email}
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
                            value={registerInput.password}
                            onChange={handleChangeInput}
                        />
                        {err.password && <ErrFeedback err={err.password} />}
                    </div>
                    <div className="w-full mb-7 flex flex-col">
                        <label htmlFor="re-password" className="mb-2">
                            Re-Password
                        </label>
                        <input
                            type="password"
                            name="rePassword"
                            id="rePassword"
                            className="p-3 text-black rounded-md"
                            value={registerInput.rePassword}
                            onChange={handleChangeInput}
                        />
                        {err.rePassword && <ErrFeedback err={err.rePassword} />}
                    </div>
                    <button type="submit" className="btn bg-indigo-400 w-full text-center">
                        Register
                    </button>
                </form>
                <div className="bg-white h-1 w-full mb-7"></div>
                <div className="w-full text-5xl flex justify-between">
                    <i className="fab fa-twitch"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-facebook"></i>
                </div>
            </div>
        </div>
    );
}

export default Register;
