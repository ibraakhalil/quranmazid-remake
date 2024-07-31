'use client'
import { useState } from 'react';
import Image from 'next/image';
import DownArrow from '../svg/DownArrow';
import GotoSvg from '../svg/GotoSvg';
import SettingSvg from '../svg/SettingSvg';

const ListCard = () => {
    const [isBuildOpen, setIsBuildOpen] = useState(false);

    return (
        <div className="w-[400px] rounded-lg overflow-hidden bg-[#1A202C] text-white shadow-4xl">
            {/* Header */}
            <div className=" px-4 py-3 bg-[#242E3F] rounded-t-lg">
                <div className='flex gap-4 items-center'>
                    <Image src="/icons/telegram.png" alt="Firebase Logo" width={32} height={32} />
                    <h2 className="text-lg font-bold">Firebase</h2>
                </div>

                <div className="flex items-center justify-between space-x-4 mt-3">
                    <div className="flex items-center">
                        <GotoSvg className="w-5 h-5 mr-2" />
                        <span className="text-white">Project Overview</span>
                    </div>
                    <button className="p-2 rounded-full hover:bg-gray-700">
                        <SettingSvg className={'stroke-white'} />
                    </button>
                </div>
            </div>

            {/* Build Dropdown */}
            <div>
                <button
                    onClick={() => setIsBuildOpen(!isBuildOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-800"
                >
                    <span className="text-lg font-medium">Build</span>
                    <DownArrow className={`w-5 h-5 transition-transform ${isBuildOpen ? 'rotate-180' : ''}`}
                    />
                </button>
                {isBuildOpen && (
                    <ul className="bg-gray-900 pb-4">
                        <li className="flex items-center gap-4 px-4 py-2 hover:bg-gray-800">
                            <SettingSvg className={'stroke-white'} />
                            <span>Authentication</span>
                        </li>
                        <li className="flex items-center gap-4 px-4 py-2 hover:bg-gray-800">
                            <SettingSvg className={'stroke-white'} />
                            <span>Database</span>
                        </li>
                        <li className="flex items-center gap-4 px-4 py-2 hover:bg-gray-800">
                            <SettingSvg className={'stroke-white'} />
                            <span>Storage</span>
                        </li>
                        <li className="flex items-center gap-4 px-4 py-2 hover:bg-gray-800">
                            <SettingSvg className={'stroke-white'} />
                            <span>Hosting</span>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ListCard;