function Thead({ th }) {
    return (
        <thead>
            <tr>
                {th.map((elem, idx) => (
                    <th key={idx} className={`${elem.width} font-semibold text-xl`}>
                        {elem.name}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default Thead;
