import axios from "../../config/axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Profile() {
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        axios
            .get("/users/individual")
            .then((res) => setUserProfile(res.data))
            .catch((err) => console.dir(err));
    }, []);

    const handleChangeInput = (e) => {
        setUserProfile((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
    };

    const clickChangeDisplayName = async () => {
        try {
            const { value: displayName } = await Swal.fire({
                title: "Enter new display name",
                input: "text",
                inputLabel: "Display Name",
                inputValue: userProfile.displayName,
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                        return "You need to write something!";
                    }
                },
            });
            setUserProfile((currentState) => ({ ...currentState, displayName }));
            await axios.put("/users/update", { displayName });
        } catch (err) {
            console.dir(err);
        }
    };

    const submitUpdateProfile = async (e) => {
        try {
            e.preventDefault();
            await Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your profile has been updated",
                showConfirmButton: false,
                timer: 1000,
            });
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="grid grid-cols-5 bg-gray-400 lg:grid-cols-none lg:grid-rows-3">
            <div className="col-span-2 flex flex-col justify-start items-center p-5 lg:col-span-3 lg:row-span-1">
                <button className="btn bg-gray-200 mb-3 py-1 z-10">
                    <i className="fas fa-edit mr-2"></i>
                    <span>Edit</span>
                </button>
                <img
                    src={userProfile.avatar}
                    className="rounded-lg mb-5"
                    style={{ width: "300px" }}
                    alt="profile-avatar"
                />
                <span className="text-center">
                    <span className="text-5xl">{userProfile.displayName}</span>
                    <button onClick={clickChangeDisplayName}>
                        <i className="fas fa-pen ml-2 text-2xl"></i>
                    </button>
                </span>
            </div>

            <div className="col-span-3 bg-gray-400 flex justify-center items-center p-10 lg:row-span-2 lg:col-span-3 md:p-0">
                <form
                    className="w-full bg-indigo-900 text-white border-4 border-indigo-400 ring-4 ring-indigo-400 rounded-lg p-10 flex flex-col justify-center items-center"
                    onSubmit={submitUpdateProfile}
                >
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="email" className="mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="p-3 text-black rounded-md"
                            value={userProfile.email}
                            onChange={handleChangeInput}
                            disabled={true}
                        />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="fname" className="mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            className="p-3 text-black rounded-md"
                            value={userProfile.firstName}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="lname" className="mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lname"
                            id="lname"
                            className="p-3 text-black rounded-md"
                            value={userProfile.lastName}
                            onChange={handleChangeInput}
                        />
                    </div>

                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="phoneNumber" className="mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            className="p-3 text-black rounded-md"
                            value={userProfile.phoneNumber}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="address" className="mb-2">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            className="p-3 text-black rounded-md"
                            value={userProfile.address}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="country" className="mb-2">
                            Country
                        </label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            className="p-3 text-black rounded-md"
                            value={userProfile.country}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="w-full mb-8 flex flex-col">
                        <label htmlFor="postalCode" className="mb-2">
                            Postal Code
                        </label>
                        <input
                            type="text"
                            name="postalCode"
                            id="postalCode"
                            className="p-3 text-black rounded-md"
                            value={userProfile.postalCode}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="w-full flex">
                        <button type="submit" className="flex-grow btn bg-green-500">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
