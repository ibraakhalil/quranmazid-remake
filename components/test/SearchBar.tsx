// SearchBar.jsx
function SearchBar() {
    return (
        <div className="bg-gray-200 rounded-lg flex items-center p-2 mt-4">
            <input
                type="text"
                placeholder="Search by Sura Name"
                className="w-full px-3 py-2 rounded-l-lg border-0 focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
    );
}

export default SearchBar;