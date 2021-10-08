const command = {
    hello: "Hello Guest",
    "!random": function (min = 0, max = 10) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    "!pi": Math.PI,
    "!now": new Date().toLocaleString(),
    bye: "Goodbye",
};

export { command };
