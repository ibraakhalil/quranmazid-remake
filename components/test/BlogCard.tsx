import React from 'react';

const BlogCard = () => {
    return (
        <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-[630px] mx-auto flex">
            <div className="absolute top-6 left-0 bg-blue-500 text-white px-3 py-1  rounded-r-full">
                CSS
            </div>
            <div className="flex-shrink-0 mr-6 flex flex-col justify-between mt-14 space-y-2">
                <div className="text-sm flex flex-col gap-6 text-gray-500">
                    <div className="flex items-center space-x-2">
                        <span>📅 Jan 19, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>⏱️ 2 min read</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">Difficulty:</span>
                    </div>
                    <span>⭐⭐⭐</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col space-y-4 min-w-[400px]">
                <div>
                    <h2 className="text-2xl font-bold">
                        Crafting Engaging CSS Animations step by step guide
                    </h2>
                    <p className="text-gray-700 mt-2">
                        In the realm of technology blogging, captivating your audience goes beyond just the written word. Incorporating eye-catching CSS animations can elevate your content and provide a dynamic...
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">Code</span>
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Guides</span>
                        <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">Tech</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img
                            src="/images/user.avif"
                            alt="Jonathan Doe"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="text-gray-700">Jonathan Doe</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
