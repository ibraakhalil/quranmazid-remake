'use client'
import React, { useState } from 'react';
import BookmarkSvg from '../icon/BookmarkSvg';
import ClockSvg from '../icon/ClockSvg';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';

function Recent() {
    const [activeTab, setActiveTab] = useState('lastRead');
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state)

    const tabs = [
        { name: 'Last Read', icon: <BookmarkSvg />, value: 'lastRead' },
        { name: 'Bookmark', icon: <BookmarkSvg />, value: 'bookmark' },
        { name: 'Pins', icon: <BookmarkSvg />, value: 'pins' },
    ];

    const surahs = [
        { title: 'Al-Fatiha', subtitle: 'Ayah: 7', icon: <ClockSvg /> },
        { title: 'Al-Fatiha', subtitle: 'Ayah: 7', icon: <ClockSvg /> },
        { title: 'Al-Fatiha', subtitle: 'Ayah: 7', icon: <ClockSvg /> },
        { title: 'Al-Fatiha', subtitle: 'Ayah: 7', icon: <ClockSvg /> },
        // Add more surahs here
    ];

    return (
        <div className="my_conatainer mx-auto mt-12">
            {/* Tabs Section */}
            <div className="border-b border-gray-300">
                <ul className="flex">
                    {tabs.map((tab) => (
                        <li
                            key={tab.value}
                            className={`px-4 py-2 cursor-pointer flex items-center ${activeTab === tab.value ? 'text-teal-500 border-b-2 border-teal-500' : 'text-gray-500'
                                }`}
                            onClick={() => setActiveTab(tab.value)}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Surahs Section */}
            <div className="grid grid-cols-4 gap-4 mt-4">
                {surahs.map((surah) => (
                    <div key={surah.title} className="border rounded-lg p-4 flex items-center">
                        <div className="mr-4">{surah.icon}</div>
                        <div>
                            <h3 className="text-lg font-semibold">{surah.title}</h3>
                            <p className="text-gray-600">{surah.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recent;