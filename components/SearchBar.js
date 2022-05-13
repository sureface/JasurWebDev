export function SearchBar() {
    return (
        <div className="md:flex items-center justify-between">
            <label className="w-2/5">
                <input type="text" name="search" id="search" placeholder="Search Countries" className="p-3 mb-3 md:mb-0 w-full rounded-md drop-shadow-md shadow-inner focus:outline-none hover:drop-shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"/>
            </label>
            <label className="flex md:flex-row justify-center">
                <select name="filter" id="filter" className="p-3 rounded-md drop-shadow-md shadow-inner focus:outline-none hover:drop-shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <option value="asia">Asia</option>
                    <option value="america">America</option>
                </select>
            </label>
        </div>
    )
}