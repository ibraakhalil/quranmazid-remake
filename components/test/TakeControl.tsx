'use client'
import { useState } from 'react';

export default function TakeControl() {
    const [partnerId, setPartnerId] = useState('');
    const [selectedOption, setSelectedOption] = useState('connect');

    const handlePartnerIdChange = (event) => {
        setPartnerId(event.target.value);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Partner ID:', partnerId);
        // console.log('Selected Option:', selectedOption);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-[500px]">
            <h2 className="text-xl font-bold mb-2">Take the control</h2>
            <p className="text-gray-600 mb-4">Of someone's device remotely.</p>

            <div className="mb-4">
                <label htmlFor="partnerId" className="block text-gray-700 text-sm font-bold mb-2">
                    PARTNER ID
                </label>
                <input
                    type="text"
                    id="partnerId"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter code"
                    value={partnerId}
                    onChange={handlePartnerIdChange}
                />
            </div>

            <div className="mb-4">
                <div className="flex items-center">
                    <div
                        className={`flex items-center mr-4 rounded-full border border-gray-300 py-2 px-4 cursor-pointer ${selectedOption === 'connect' ? 'bg-blue-500 text-white' : ''
                            }`}
                        onClick={() => setSelectedOption('connect')}
                    >
                        <input
                            type="radio"
                            id="connect"
                            name="option"
                            value="connect"
                            checked={selectedOption === 'connect'}
                            onChange={handleOptionChange}
                            className="hidden"
                        />
                        <span className="ml-2">Connect</span>
                    </div>
                    <div
                        className={`flex items-center rounded-full border border-gray-300 py-2 px-4 cursor-pointer ${selectedOption === 'browseFiles' ? 'bg-blue-500 text-white' : ''
                            }`}
                        onClick={() => setSelectedOption('browseFiles')}
                    >
                        <input
                            type="radio"
                            id="browseFiles"
                            name="option"
                            value="browseFiles"
                            checked={selectedOption === 'browseFiles'}
                            onChange={handleOptionChange}
                            className="hidden"
                        />
                        <span className="ml-2">Browse Files</span>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
}