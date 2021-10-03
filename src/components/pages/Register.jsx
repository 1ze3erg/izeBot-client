function Register() {
    return (
        <div className="bg-gray-400 flex justify-center items-center py-10 sm:px-5">
            <div className="w-500 md:max-w-md sm:max-w-full bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg p-10 flex flex-shrink-0 flex-col justify-center items-center">
                <h1 className="w-full text-center text-3xl font-semibold mb-5">Register</h1>
                <form className="w-full mb-7 flex flex-col items-center">
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="display-name" className="mb-2">
                            Display Name
                        </label>
                        <input
                            type="text"
                            name="display-name"
                            id="display-name"
                            className="p-3 text-black rounded-md"
                        />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="email" className="mb-2">
                            Email
                        </label>
                        <input type="email" name="email" id="email" className="p-3 text-black rounded-md" />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="password" className="mb-2">
                            Password
                        </label>
                        <input type="password" name="password" id="password" className="p-3 text-black rounded-md" />
                    </div>
                    <div className="w-full mb-7 flex flex-col">
                        <label htmlFor="re-password" className="mb-2">
                            Re-Password
                        </label>
                        <input
                            type="password"
                            name="re-password"
                            id="re-password"
                            className="p-3 text-black rounded-md"
                        />
                    </div>
                    <a href="./login.html" className="btn bg-indigo-400 w-full text-center">
                        Register
                    </a>
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
