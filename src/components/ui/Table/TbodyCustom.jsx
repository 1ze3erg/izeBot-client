function TbodyCustom({ customCommands, clickChangeStatus, clickEditPopUp, clickDelCustom }) {
    return (
        <tbody>
            {customCommands.map((elem) => {
                return (
                    <tr key={elem.id}>
                        <td>
                            <button className="text-3xl" onClick={() => clickChangeStatus(elem.id, elem.status)}>
                                <i className={`fas fa-toggle-${elem.status ? "on" : "off"}`}></i>
                            </button>
                        </td>
                        <td>
                            <p className="text-lg">{elem.command}</p>
                        </td>
                        <td>
                            <span className="text-lg">{elem.response}</span>
                        </td>
                        <td>
                            <button
                                className="text-xl block"
                                onClick={() => clickEditPopUp(elem.id, "Enter Command", "Command", elem.command)}
                            >
                                <i className="fas fa-pencil-alt" title="edit command"> Command</i>
                            </button>
                            <button
                                className="text-xl block"
                                onClick={() => clickEditPopUp(elem.id, "Enter Response", "Response", elem.response)}
                            >
                                <i className="fas fa-pen" title="edit response"> Response</i>
                            </button>
                            <button
                                className="text-xl block"
                                onClick={() =>
                                    clickEditPopUp(elem.id, "Enter Description", "Description", elem.description)
                                }
                            >
                                <i className="fas fa-edit" title="edit description"> Description</i>
                            </button>
                            <button className="text-xl block" onClick={() => clickDelCustom(elem.id)}>
                                <i className="fas fa-trash" title="delete"> Delete</i>
                            </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
}

export default TbodyCustom;
