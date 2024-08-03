const EditBookmarkFolder = () => {
  return (
    <div className="w-[450px] rounded-lg bg-white p-4 shadow-md">
      <h2 className="py-4 text-center text-lg font-medium">Edit Bookmark Folder</h2>

      {/* Folder Name Input */}
      <h3 className="mb-2 mt-4 text-sm font-medium">Folder Name</h3>
      <div className="flex items-center rounded-md bg-gray-100 p-2">
        <svg className="mr-2 h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
        <input type="text" placeholder="Folder Name" className="w-full bg-gray-100 outline-none" />
      </div>

      {/* Color Picker */}
      <h3 className="mb-2 mt-4 text-sm font-medium">Change Folder Color</h3>
      <div className="flex gap-3">
        {['teal', 'blue', 'yellow', 'lime', 'green', 'purple'].map((color) => (
          <div
            key={color}
            className={`h-6 w-6 cursor-pointer rounded-md`}
            style={{ backgroundColor: `${color}` }}
          ></div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end">
        <button className="mr-2 rounded-md bg-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-300">
          Cancel
        </button>
        <button className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">Update</button>
      </div>
    </div>
  );
};

export default EditBookmarkFolder;
