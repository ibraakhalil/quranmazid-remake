'use client'
import { useState } from 'react';

export default function PricingCard() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div
            className="rounded-lg shadow-md p-6 bg-white text-center"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Silver</h2>
            <p className="text-4xl font-extrabold text-gray-900 mb-4">$2997</p>
            <p className="text-gray-600 mb-6">
                This is the best plan for people who are standing out
            </p>

            <ul className="list-none mb-6">
                <li className="flex items-center justify-between mb-2">
                    <span className="text-gray-800 font-medium">Payments</span>
                    <span className="bg-purple-100 rounded-full px-3 py-1 text-purple-500 font-bold">
                        6
                    </span>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <span className="text-gray-800 font-medium">Subscriptions</span>
                    <span className="bg-purple-100 rounded-full px-3 py-1 text-purple-500 font-bold">
                        9
                    </span>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <span className="text-gray-800 font-medium">Ads</span>
                    <span className="bg-purple-100 rounded-full px-3 py-1 text-purple-500 font-bold">
                        6
                    </span>
                </li>
            </ul>
            <button
                className={`bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300 ${isHovering ? 'shadow-lg' : ''
                    }`}
            >
                Upgrade
            </button>
        </div>
    );
}