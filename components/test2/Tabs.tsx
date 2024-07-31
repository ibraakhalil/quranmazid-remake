'use client'

import { useState } from 'react';

function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="flex border-2 rounded-lg overflow-hidden">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`px-4 flex-grow py-2 transition-colors duration-300 ease-in-out ${index === activeTab
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                    onClick={() => handleTabClick(index)}
                >
                    {tab.title}
                </button>
            ))}
        </div>
    );
}

export default Tabs;