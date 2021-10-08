function TbodyChatLog({ chatLogs }) {
    return (
        <tbody>
            {chatLogs.map((elem) => (
                <tr key={elem.id}>
                    <td>{new Date(elem.date).toLocaleString("th-TH")}</td>
                    <td>{elem.chatter}</td>
                    <td>{elem.message}</td>
                    <td>{elem.ChatRoom?.chatRoomName}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default TbodyChatLog;
