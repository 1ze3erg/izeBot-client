const tokenName = process.env.TOKEN_NAME;

function getToken() {
    return localStorage.getItem(tokenName);
}

function setToken(token) {
    return localStorage.setItem(tokenName, token);
}

function removeToken() {
    return localStorage.removeItem(tokenName);
}

export { getToken, setToken, removeToken };
