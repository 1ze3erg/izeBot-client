import axios from "axios";
import Swal from "sweetalert2";
import { getToken, removeToken } from "../helpers/localStorage";
import { API_URL } from "./env";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${getToken()}`;
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        if (err.response && err.response.status === 401) {
            removeToken();
            window.location.reload();
            return;
        }
        if (err.response && err.response.status === 400) {
            console.dir(err);
            Swal.fire({
                icon: "error",
                title: "Error...",
                text: err.response?.data?.msg,
            });
        }
        return Promise.reject(err);
    }
);

export default axios;
