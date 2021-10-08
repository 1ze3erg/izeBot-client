function TbodyDefault({ defaultCommands }) {
    return (
        <tbody>
            {defaultCommands.map((elem) => {
                return (
                    <tr key={elem.id}>
                        <td>
                            <p className="text-lg">{elem.command}</p>
                        </td>
                        <td>
                            <p className="text-md">{elem.description}</p>
                        </td>
                        <td>
                            <p className="text-lg">{elem.response}</p>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
}

export default TbodyDefault;
