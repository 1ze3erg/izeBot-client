const command = {
    hello: "Hello Guest",
    "!random": function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    "!pi": Math.PI,
    "!now": new Date().toLocaleString(),
    bye: "Goodbye",
};

export { command };
