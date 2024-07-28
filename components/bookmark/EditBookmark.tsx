import React from 'react';

const EditBookmarkFolder = () => {
    return (
        <div className="w-[450px] rounded-lg bg-white p-4 shadow-md">
            <h2 className="text-lg text-center font-medium py-4">Edit Bookmark Folder</h2>

            {/* Folder Name Input */}
            <h3 className="text-sm font-medium mt-4 mb-2">Folder Name</h3>
            <div className="flex items-center rounded-md bg-gray-100 p-2">
                <svg className="h-6 w-6 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
                <input
                    type="text"
                    placeholder="Folder Name"
                    className="w-full bg-gray-100 outline-none"
                />
            </div>

            {/* Color Picker */}
            <h3 className="text-sm font-medium mt-4 mb-2">Change Folder Color</h3>
            <div className="flex gap-3">
                {['teal', 'blue', 'yellow', 'lime', 'green', 'purple'].map((color) => (
                    <div
                        key={color}
                        className={`w-6 h-6 rounded-md cursor-pointer`}
                        style={{ backgroundColor: `${color}` }}
                    ></div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md mr-2">
                    Cancel
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditBookmarkFolder;