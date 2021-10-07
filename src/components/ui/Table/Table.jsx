function Table({ children }) {
    return (
        <table className="w-full mx-auto text-center bg-white md:overflow-auto md:block">
            {children}
        </table>
    );
}

export default Table;
