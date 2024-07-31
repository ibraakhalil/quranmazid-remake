"use client"
import React, { useState } from 'react';

const ProfileCard = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="relative w-[400px] rounded-lg shadow-md bg-white p-6 py-10">

            {/* Three dot menu */}
            <div className="absolute top-4 right-4">
                <button onClick={() => setShowPopup(!showPopup)} className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>

                {/* Popup Menu */}
                {showPopup && (
                    <div className="absolute top-8 -right-20 z-10 w-40 bg-white rounded-md shadow-lg py-2">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Edit</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Export</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Delete</a>
                    </div>
                )}
            </div>

            {/* User Image */}
            <div className="flex items-center justify-center mb-4 mt-10">
                <img
                    src="/images/user.avif"
                    alt="Bonnie Green"
                    className="rounded-full size-32"
                />
            </div>

            {/* User Info */}
            <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Bonnie Green</h3>
                <p className="text-sm text-gray-500">Visual Designer</p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4 justify-center">
                <button className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium">Add friend</button>
                <button className="px-6 py-2 rounded-full border border-blue-500 text-blue-500 font-medium">Message</button>
            </div>
        </div>
    );
};

export default ProfileCard;