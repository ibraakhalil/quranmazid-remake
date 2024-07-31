// This component requires Tailwind CSS for styling.
"use client"
import React from 'react';
const users = [
    { name: 'Cody Fisher', image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png' },
    { name: 'Cameron Williamson', image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png' },
    { name: 'Robert Alexander', image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png' },
    { name: 'Robert Alexander', image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png' },
    // Add more users as needed
]

const ProjectCard = () => {
    return (
        <div className="w-[450px] rounded-lg p-4 bg-white shadow-md">
            {/* Section 1: Header with Icon and Border */}
            <div className="flex items-center justify-between border-b pb-2">
                <h2 className="text-lg font-semibold">
                    <span className="mr-2">{/* Your icon here */}</span>
                    Lastmag Clothing LTD.
                </h2>
            </div>

            {/* Section 2: Status and Date */}
            <div className="flex items-center justify-between py-2 mt-2">
                <div className="flex items-center rounded-full p-2 px-4 border">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-sm text-gray-600">In Progress</span>
                </div>
                <span className="text-sm text-gray-600">24 March 2024</span>
            </div>

            {/* Section 3: User Cards */}
            <div className="flex flex-wrap gap-3 mt-8">
                {/* Replace these with your actual user data and images */}
                {users.map((user, index) => (
                    <div key={index} className="flex items-center space-x-2 rounded-full bg-gray-100 pr-4">
                        <img className="w-6 h-6 rounded-full border" src={user.image} alt={user.name} />
                        <span className="text-sm text-gray-600 font-medium">{user.name}</span>
                    </div>
                ))}
                {/* Display "+2 others" if there are more than 3 users */}
                {users.length > 3 && (
                    <div className="flex items-center px-2  space-x-2 rounded-lg bg-gray-100">
                        <span className="text-sm font-medium">+2 others</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;