function Profile() {
    return (
        <div className="grid grid-cols-5 bg-gray-400 lg:grid-cols-none lg:grid-rows-3">
            <div className="col-span-2 flex flex-col justify-start items-center p-5 lg:col-span-3 lg:row-span-1">
                <button className="btn bg-gray-200 -mb-3 py-1 z-10">
                    <i className="fas fa-edit mr-2"></i>
                    <span>Edit</span>
                </button>
                <img
                    src="https://picsum.photos/500"
                    className="rounded-lg mb-5"
                    style={{ width: "300px" }}
                    alt="profile-avatar"
                />
                <span className="text-center">
                    <span className="text-5xl">Display Name</span>
                    <button>
                        <i className="fas fa-pen ml-2 text-2xl"></i>
                    </button>
                </span>
            </div>

            <div className="col-span-3 bg-gray-400 flex justify-center items-center p-10 lg:row-span-2 lg:col-span-3 md:p-0">
                <form className="w-full bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg p-10 flex flex-col justify-center items-center">
                    <div className="w-full mb-5 flex flex-col">
                        <label for="fname" className="mb-2">
                            Firstname
                        </label>
                        <input type="text" name="fname" id="fname" className="p-3 text-black rounded-md" />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label for="lname" className="mb-2">
                            Lastname
                        </label>
                        <input type="text" name="lname" id="lname" className="p-3 text-black rounded-md" />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label for="email" className="mb-2">
                            Email
                        </label>
                        <input type="email" name="email" id="email" className="p-3 text-black rounded-md" />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label for="phone" className="mb-2">
                            Phone Number
                        </label>
                        <input type="tel" name="phone" id="phone" className="p-3 text-black rounded-md" />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label for="address" className="mb-2">
                            Address
                        </label>
                        <input type="text" name="address" id="address" className="p-3 text-black rounded-md" />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label for="country" className="mb-2">
                            Country
                        </label>
                        <input type="text" name="country" id="country" className="p-3 text-black rounded-md" />
                    </div>
                    <div className="w-full mb-8 flex flex-col">
                        <label for="postal" className="mb-2">
                            Postal Code
                        </label>
                        <input type="text" name="postal" id="postal" className="p-3 text-black rounded-md" />
                    </div>
                    <div className="w-full flex">
                        <button type="submit" className="flex-grow btn bg-purple-400 mr-5">
                            Save
                        </button>
                        <button type="reset" className="flex-grow btn bg-gray-400">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
