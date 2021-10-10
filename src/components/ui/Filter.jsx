function Filter({ perPage, handleChangePerPage, searchInput, handleChangeSearch }) {
    return (
        <div className="flex justify-between mb-2 md:flex-col">
            <div
                className="
                            flex
                            md:flex-1
                            items-center
                            md:mb-2 md:text-xl md:text-center md:border-2 md:border-black md:p-2 md:bg-gray-600
                        "
            >
                <span className="mr-2 md:flex-1 md:m-0 md:text-white">Show</span>
                <select
                    className="mr-2 p-2 md:flex-1 self-stretch md:m-0"
                    value={perPage}
                    onChange={handleChangePerPage}
                >
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
                <span className="md:flex-1 md:text-white">Commands</span>
            </div>
            <div
                className="
                            flex flex-1
                            justify-end
                            items-center
                            md:text-xl md:text-center md:border-2 md:border-black md:p-2 md:bg-gray-600
                        "
            >
                <label htmlFor="search" className="mr-2 md:flex-1 md:m-0 md:text-white">
                    Search
                </label>
                <input
                    type="text"
                    id="search"
                    className="p-2 md:flex-1"
                    value={searchInput}
                    onChange={handleChangeSearch}
                />
            </div>
        </div>
    );
}

export default Filter;
