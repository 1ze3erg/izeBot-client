function Table({ children }) {
    return (
        <table className="block mx-auto text-center bg-white md:overflow-auto">
            {children}
        </table>
    );
}

export default Table;
