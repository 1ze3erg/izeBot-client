function Pagination(props) {
    const { showing, to, total, currentPage, setCurrentPage, createPageArr, numberOfPage } = props;
    return (
        <div className="flex justify-between items-center mt-2 md:flex-col">
            <span className="md:mb-5 md:mr-0 mt-2 mr-3">
                Showing {showing} to {to} of {total} Commands
            </span>
            <ul className="flex flex-wrap gap-y-1 text-center md:grid md:grid-cols-4 md:gap-px">
                <li
                    className={`
                            ${currentPage === 1 ? "cursor-default" : "cursor-pointer"}
                                hover:bg-gray-500
                                border border-black
                                rounded-l-md
                                px-4
                                py-2
                                md:rounded-none md:border-2
                            `}
                    onClick={() => setCurrentPage(1)}
                >
                    First
                </li>
                <li
                    className={`
                            ${currentPage === 1 ? "cursor-default" : "cursor-pointer"}
                                hover:bg-gray-500
                                border border-black
                                px-4
                                py-2
                                md:border-2
                                col-span-2
                            `}
                    onClick={() =>
                        setCurrentPage((currentState) => (currentState === 1 ? currentState : currentState - 1))
                    }
                >
                    Previous
                </li>
                {createPageArr(numberOfPage).map((elem, idx) => (
                    <li
                        key={idx}
                        className={`
                                cursor-pointer
                                hover:bg-gray-500
                                border border-black
                                px-4
                                py-2
                                md:border-2
                                ${currentPage === elem ? "bg-gray-700 text-white" : ""}
                            `}
                        onClick={() => setCurrentPage(elem)}
                    >
                        {elem}
                    </li>
                ))}
                <li
                    className={`
                            ${currentPage === numberOfPage ? "cursor-default" : "cursor-pointer"}
                                hover:bg-gray-500
                                border border-black
                                px-4
                                py-2
                                md:border-2
                            `}
                    onClick={() =>
                        setCurrentPage((currentState) =>
                            currentState === numberOfPage ? currentState : currentState + 1
                        )
                    }
                >
                    Next
                </li>
                <li
                    className={`
                                ${currentPage === numberOfPage ? "cursor-default" : "cursor-pointer"}
                                hover:bg-gray-500
                                border border-black
                                rounded-r-md
                                px-4
                                py-2
                                md:rounded-none md:border-2
                            `}
                    onClick={() => setCurrentPage(numberOfPage)}
                >
                    Last
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
