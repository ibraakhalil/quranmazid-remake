'use client'
import { useState } from 'react';
import { MdArrowCircleDown, MdSettings } from 'react-icons/md';
import { SlArrowDown } from 'react-icons/sl';
import { Range } from 'react-range';

const FontSettings = () => {
    const [arabicFontSize, setArabicFontSize] = useState(19);
    const [translationFontSize, setTranslationFontSize] = useState(19);

    // Add state and functions for handling font face selection if needed

    return (
        <div className="font-settings w-[400px] bg-white rounded-xl border p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <span className="mr-2">
                        <MdSettings className='text-[24px]' />
                    </span>
                    <h3 className="text-lg font-medium">Font Settings</h3>
                </div>
                <SlArrowDown />
            </div>

            <div className="mb-4">
                <label htmlFor="arabicFontSize" className="block text-sm font-medium mb-1">Arabic Font Size</label>
                <div className='flex gap-4 items-center'>
                    <Range
                        values={[arabicFontSize]}
                        step={1}
                        min={12}
                        max={30}
                        onChange={(values) => setArabicFontSize(values[0])}
                        renderTrack={({ props, children }) => (
                            <div {...props} className="h-2 flex-grow rounded-md bg-gray-300">
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div {...props} className="w-4 h-4 rounded-full bg-green-500" />
                        )}
                    />
                    <output className="mt-1 text-sm">{arabicFontSize}</output>
                </div>

            </div>
            <div className="mb-4">
                <label htmlFor="arabicFontSize" className="block text-sm font-medium mb-1">Arabic Font Size</label>
                <div className='flex gap-4 items-center'>
                    <Range
                        values={[arabicFontSize]}
                        step={1}
                        min={12}
                        max={30}
                        onChange={(values) => setArabicFontSize(values[0])}
                        renderTrack={({ props, children }) => (
                            <div {...props} className="h-2 flex-grow rounded-md bg-gray-300">
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div {...props} className="w-4 h-4 rounded-full bg-green-500" />
                        )}
                    />
                    <output className="mt-1 text-sm">{arabicFontSize}</output>
                </div>

            </div>

            {/* Similar structure for Translation Font Size */}

            <div className="mb-4">
                <label htmlFor="arabicFontFace" className="block text-sm font-medium mb-1">Arabic Font Face</label>
                <select id="arabicFontFace" className="w-full rounded bg-gray-100 px-3 py-2">
                    <option value="PDMSIslam">PDMS Islam</option>
                    {/* Add more font options here */}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="arabicFontFace" className="block text-sm font-medium mb-1">Arabic Font Face</label>
                <select id="arabicFontFace" className="w-full rounded bg-gray-100 px-3 py-2">
                    <option value="PDMSIslam">PDMS Islam</option>
                    {/* Add more font options here */}
                </select>
            </div>

            {/* Similar structure for Translation Font Face */}
        </div>
    );
};

export default FontSettings;