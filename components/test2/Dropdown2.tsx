'use client'
import { useState } from 'react';
import SearchSvg from '../svg/SearchSvg';
import DownArrow from '../svg/DownArrow';

const Dropdown2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const frameworks = [
        'Next.js',
        'SvelteKit',
        'Nuxt.js',
        'Remix',
        'Astro',
    ];

    return (
        <div className="relative w-[250px]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            >
                <span className="block truncate">Select framework...</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <DownArrow />
                </span>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md px-2">
                    <div className="px-2 py-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search framework..."
                                className="w-full px-3 py-2 pl-8 leading-5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 mr-4 pointer-events-none">
                                <SearchSvg /> {/* Use your SearchSvg component here */}
                            </div>
                        </div>
                    </div>
                    <ul className="py-1 max-h-60 overflow-y-auto">
                        {frameworks.map((framework) => (
                            <li key={framework}>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {framework}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown2;