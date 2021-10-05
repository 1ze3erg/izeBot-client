import { AVATAR_NAME, TOKEN_NAME } from "../config/env";

function getToken() {
    return localStorage.getItem(TOKEN_NAME);
}

function setToken(token) {
    return localStorage.setItem(TOKEN_NAME, token);
}

function removeToken() {
    return localStorage.removeItem(TOKEN_NAME);
}

function getAvatar() {
    return localStorage.getItem(AVATAR_NAME);
}

function setAvatar(avatar) {
    return localStorage.setItem(AVATAR_NAME, avatar);
}

function removeAvatar() {
    return localStorage.removeItem(AVATAR_NAME);
}

export { getToken, setToken, removeToken, getAvatar, setAvatar, removeAvatar };
