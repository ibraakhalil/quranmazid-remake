import React from 'react';

const ProductCard2 = ({ product }) => {
    const { title, subtitle, imageUrl, rating, price, colors } = product;

    return (
        <div className="w-[400px] rounded-lg shadow-lg bg-white">
            {/* Image with Shopping Icon */}
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-64 rounded-t-lg" />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </div>
            </div>

            {/* Title, Subtitle, and Rating */}
            <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-500 text-sm">{subtitle}</p>
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Color Options and Price */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500">Colour:</span>
                    {colors.map((color) => (
                        <div
                            key={color}
                            className={`w-6 h-6 rounded-full border border-gray-300 cursor-pointer`}
                            style={{ backgroundColor: color }}
                        >
                        </div>
                    ))}
                </div>
                <span className="text-lg font-bold flex flex-col">${price} <span className='text-gray-500 text-xs'>Four Dollar</span></span>
            </div>

            {/* Add to Cart Button */}
            <button className="py-3 w-[80%] block px-10 my-4 mx-auto text-white font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard2;