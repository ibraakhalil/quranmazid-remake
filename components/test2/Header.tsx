'use client'
import { useState } from 'react';
import SearchSvg from '../svg/SearchSvg';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[#217BF4] px-4 py-3 shadow-md w-[600px]">
            <div className="container mx-auto flex items-center justify-between">
                {/* Hamburger Icon & Title */}
                <div className="flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="mr-4 inline-block text-white focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6 stroke-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                    <span className="text-white text-lg font-bold">MUI</span>
                </div>

                {/* Search Box */}
                <div className="relative flex-grow lg:flex-grow-0 lg:max-w-xs">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-3 py-2 pl-8 rounded-lg bg-white focus:outline-none"
                    />
                    <SearchSvg className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Icons with Badges */}
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="relative">
                        <svg
                            className="h-8 w-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 19v-8.387a2 2 0 01.894-1.788l4.483-1.332 4.483 1.332a2 2 0 01.894 1.788V19M15 19a2 2 0 002-2v-4.688A2 2 0 0017 8l-5.332 1.599a2 2 0 00-1.11 2.059V19z"
                            />
                        </svg>
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white rounded-full bg-red-500">
                            4
                        </span>
                    </div>
                    <div className="relative">
                        <svg
                            className="h-8 w-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.158 6 8.388 6 11v3.159c0 .538-.214 1.055-.571 1.436L4 17h5z"
                            />
                        </svg>
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white rounded-full bg-red-500">
                            17
                        </span>
                    </div>
                    <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </div>
            </div>

            {/* Mobile Menu (optional) */}
            {isMobileMenuOpen && (
                <div className="lg:hidden mt-4 bg-white p-4 rounded-lg shadow-md">
                    {/* Your mobile menu items here */}
                </div>
            )}
        </header>
    );
};

export default Header;