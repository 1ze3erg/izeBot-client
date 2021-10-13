const defaultCommand = {
    hello: { response: "Hello GUEST", type: "string" },
    bye: { response: "Goodbye GUEST", type: "string" },
    "!random": {
        response: function (min = 0, max = 10) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        type: "function",
    },
    "!pi": { response: Math.PI, type: "javascript" },
    "!now": { response: new Date().toLocaleString(), type: "javascript" },
    "!covid": { response: "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all", type: "api" },
};

export { defaultCommand };
