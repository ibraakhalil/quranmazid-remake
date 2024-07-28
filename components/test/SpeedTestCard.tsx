import React from 'react';

const SpeedTestCard = () => {
    return (
        <div className="bg-white rounded-lg p-8 py-20 shadow-md flex flex-col items-center"> {/* Added flex and items-center */}
            <p className="text-gray-500 text-4xl">TYPING SPEED TEST</p>
            <h2 className="text-[100px] font-bold mb-6">Test your typing skills</h2>

            <div className="flex justify-center w-full gap-8"> {/* Added w-full for full width */}
                <div className="border-yellow-400 border-4 font-bold rounded-full size-32 flex flex-col text-[#000] text-3xl justify-center items-center"> {/* Adjusted padding */}
                    60
                    <span className="text-xs">seconds</span>
                </div>

                {/* Square elements in the last row */}
                <div className="bg-gray-200 rounded-lg px-4 py-3 aspect-square flex flex-col items-center justify-center">
                    0
                    <span className="text-xs">words/min</span>
                </div>

                <div className="bg-gray-200 rounded-lg px-4 py-3 aspect-square flex flex-col items-center justify-center">
                    0
                    <span className="text-xs">chars/min</span>
                </div>

                <div className="bg-gray-200 rounded-lg px-4 py-3 aspect-square flex flex-col items-center justify-center">
                    0
                    <span className="text-xs">% accuracy</span>
                </div>
            </div>
        </div>
    );
};

export default SpeedTestCard;