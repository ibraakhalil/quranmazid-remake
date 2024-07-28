'use client'
import React from 'react';

const CreateProjectForm = () => {
    return (
        <div className="w-[450px] rounded-lg border p-6 bg-white">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Create project</h2>
                <p className="text-gray-600">Deploy your new project in one-click.</p>
            </div>

            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border rounded-lg"
                    placeholder="Name of your project"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="framework" className="block text-gray-700 font-medium mb-2">Framework</label>
                <select id="framework" className="w-full px-4 py-3 border bg-transparent rounded-lg">
                    <option value="">Select</option>
                    {/* Add your framework options here */}
                </select>
            </div>

            <div className="flex justify-between">
                <button className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300">
                    Cancel
                </button>
                <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-blue-700">
                    Deploy
                </button>
            </div>
        </div>
    );
};

export default CreateProjectForm;