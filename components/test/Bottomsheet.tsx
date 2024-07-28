"use client"

import { useState } from 'react';

const Bottomsheet = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState(0);

    const arr = ["IRD Foundation", "Open to the world", "Try to best", "UI design pract", "Figma custom color"]

    const toggleBottomSheet = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Button to trigger bottomsheet (replace with your own button) */}
            <button className='bg-gray-500 rounded-lg px-4 py-1 w-[200px] text-white mx-auto' onClick={toggleBottomSheet}>Open Bottomsheet</button>

            {isOpen && (
                <div
                    className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center transition-all"
                    style={{ transform: isOpen ? 'translateY(0)' : 'translateY(100%)' }}
                >
                    <div className="bg-white rounded-t-2xl px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-[320px] sm:w-full sm:p-6">
                        <div>
                            <h2 className="text-center text-xl font-medium text-gray-900">
                                Sort Sections
                            </h2>
                            <ul className="mt-6 space-y-4">
                                {arr.map((item, i) => <li className="flex items-center mb-2">
                                    <span className="text-base font-medium text-gray-900">{item}</span>
                                    <div onClick={() => setOption(i)} className="ml-auto relative w-5 h-5 border border-gray-500 rounded-full cursor-pointer">
                                        <div className="absolute inset-0 border-gray-400">
                                            {option === i && <div className="absolute w-3 h-3 bg-blue-500 rounded-full transition-all duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                                            </div>}
                                        </div>

                                    </div>
                                </li>)}

                                {/* Repeat the above structure for other options */}

                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Bottomsheet;