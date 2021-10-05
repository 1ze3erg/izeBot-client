function TbodyTimer({ timers, clickDelTimer, clickChangeStatus, clickEditPopUp }) {
    return (
        <tbody>
            {timers.map((elem) => {
                return (
                    <tr key={elem.id}>
                        <td>
                            <button className="text-3xl" onClick={() => clickChangeStatus(elem.id, elem.status)}>
                                <i className={`fas fa-toggle-${elem.status ? "on" : "off"}`}></i>
                            </button>
                        </td>
                        <td>
                            <p className="text-lg">{elem.timerName}</p>
                        </td>
                        <td>
                            <p className="text-lg">{elem.response}</p>
                        </td>
                        <td>
                            <p className="text-lg">{elem.interval / 60000}</p>
                        </td>
                        <td>
                            <button
                                className="text-lg block"
                                onClick={() => clickEditPopUp(elem.id, "Enter TimerName", "TimerName", elem.timerName)}
                            >
                                <i className="fas fa-pencil-alt"> TimerName</i>
                            </button>
                            <button
                                className="text-lg block"
                                onClick={() => clickEditPopUp(elem.id, "Enter Response", "Response", elem.response)}
                            >
                                <i className="fas fa-pen"> Response</i>
                            </button>
                            <button
                                className="text-lg block"
                                onClick={() =>
                                    clickEditPopUp(elem.id, "Enter Interval (mins)", "Interval", elem.interval)
                                }
                            >
                                <i className="fas fa-marker"> Interval</i>
                            </button>
                            <button
                                className="text-lg block"
                                onClick={() =>
                                    clickEditPopUp(elem.id, "Enter Description", "Description", elem.description)
                                }
                            >
                                <i className="fas fa-edit"> Description</i>
                            </button>
                            <button className="text-lg block" onClick={() => clickDelTimer(elem.id)}>
                                <i className="fas fa-trash"> Timer</i>
                            </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
}

export default TbodyTimer;
