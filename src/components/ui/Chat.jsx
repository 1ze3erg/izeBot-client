function Chat({ displayName, message, role }) {
    const icon = role === "MEMBER" ? (
        <i className="fas fa-user bg-gray-300 text-indigo-700 text-lg px-3 py-1 mr-2 rounded-md" title="MEMBER"></i>
    ) : (
        <i className="fas fa-robot bg-gray-300 text-indigo-700 text-lg px-2 py-1 mr-2 rounded-md" title="BOT"></i>
    );
    const bgColor = role === "MEMBER" ? "bg-gray-800" : "bg-red-700";
    return (
        <div className="self-start mb-5 flex items-center">
            {icon}
            <h3 className={`${bgColor} text-white px-5 py-1 mr-3 rounded-md`}>{displayName}</h3>
            <p className="text-white">{message}</p>
        </div>
    );
}

export default Chat;