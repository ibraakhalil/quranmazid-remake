'use client'
import { useState } from 'react';

export default function FontSettings() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-[400px]">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
                <div className="flex items-center">
                    <span className="text-teal-500 mr-2">
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
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    </span>
                    <span className="text-lg font-medium text-gray-800">Font Settings</span>
                </div>
                <span className="text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </div>
            {isOpen && (
                <div className="mt-4">
                    <div className="mb-4">
                        <div className="text-sm font-medium text-gray-600 mb-2">Arabic Font Size</div>
                        <div className="flex items-center">
                            <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                                <div className="h-full bg-teal-500 rounded-full" style={{ width: '70%' }}></div> {/* Adjust width for default value */}
                            </div>
                            <span className="text-gray-600">19</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="text-sm font-medium text-gray-600 mb-2">Translation Font Size</div>
                        <div className="flex items-center">
                            <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                                <div className="h-full bg-teal-500 rounded-full" style={{ width: '70%' }}></div> {/* Adjust width for default value */}
                            </div>
                            <span className="text-gray-600">19</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="text-sm font-medium text-gray-600 mb-2">Arabic Font Face</div>
                        <div className="relative">
                            <select
                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:ring focus:border-teal-300"
                                defaultValue="PDMS Islam"
                            >
                                <option value="PDMS Islam">PDMS Islam</option>
                                {/* Add more font options as needed */}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-medium text-gray-600 mb-2">Translation Font Face</div>
                        <div className="relative">
                            <select
                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:ring focus:border-teal-300"
                                defaultValue="Open Sans"
                            >
                                <option value="Open Sans">Open Sans</option>
                                {/* Add more font options as needed */}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}