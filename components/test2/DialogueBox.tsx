const DialogueBox = () => {
    return (
        <div className="rounded-lg shadow-lg bg-white w-[400px] p-6">
            <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold">Edit profile</h2>
                <button className="text-gray-500 hover:text-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <p className="text-gray-500 text-sm mt-2">
                Make changes to your profile here. Click save when you're done.
            </p>
            <div className="mt-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="Pedro Duarte"
                />
            </div>
            <div className="mt-4">
                <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                >
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="@peduarte"
                />
            </div>
            <button className="w-full mt-6 bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-darker focus:outline-none focus:ring focus:ring-blue-300">
                Save changes
            </button>
        </div>
    );
}

export default DialogueBox;