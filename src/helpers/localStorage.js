import { AVATAR_NAME, DISPLAY_NAME, TOKEN_NAME } from "../config/env";

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

function getDisplayName() {
    return localStorage.getItem(DISPLAY_NAME);
}

function setDisplayName(displayName) {
    return localStorage.setItem(DISPLAY_NAME, displayName);
}

function removeDisplayName() {
    return localStorage.removeItem(DISPLAY_NAME);
}

export {
    getToken,
    setToken,
    removeToken,
    getAvatar,
    setAvatar,
    removeAvatar,
    getDisplayName,
    setDisplayName,
    removeDisplayName,
};
