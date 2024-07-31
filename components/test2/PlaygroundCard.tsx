const PlaygroundCard = () => {
    return (
        <div className="w-[350px] rounded-lg bg-white shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Playground</h2>

            <div className="mb-4">
                <h3 className="text-gray-700 font-medium mb-2">Variant</h3>
                <button className="px-2 py-1 mr-2 rounded-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none">plain</button>
                <button className="px-2 py-1 mr-2 rounded-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none">outlined</button>
                <button className="px-2 py-1 mr-2 rounded-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none">soft</button>
                <button className="px-2 py-1 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none">solid</button>
            </div>

            <div className="mb-4">
                <h3 className="text-gray-700 font-medium mb-2">Color</h3>
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 mr-2 flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-white"></span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-500 mr-2"></div>
                    <div className="w-8 h-8 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 mr-2"></div>
                    <div className="w-8 h-8 rounded-full bg-amber-500"></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Primary</p>
            </div>

            <div className="mb-4">
                <h3 className="text-gray-700 font-medium mb-2">Size</h3>
                <button className="px-2 py-1 mr-2 rounded-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none">sm</button>
                <button className="px-2 py-1 mr-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none">md</button>
                <button className="px-2 py-1 rounded-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none">lg</button>
            </div>

            <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-700 font-medium mr-4">Disabled</h3>
                <div className="relative inline-block w-10 h-6 rounded-full bg-gray-300">
                    <span className="absolute w-4 h-4 rounded-full bg-white top-1 left-1 transition duration-200"></span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <h3 className="text-gray-700 font-medium mr-4">Loading</h3>
                <div className="relative inline-block w-10 h-6 rounded-full bg-gray-300">
                    <span className="absolute w-4 h-4 rounded-full bg-white top-1 left-1 transition duration-200"></span>
                </div>
            </div>

        </div>
    );
}

export default PlaygroundCard;