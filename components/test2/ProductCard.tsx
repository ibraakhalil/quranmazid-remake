// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
    const { imageUrl, title, price, discount, rating } = product;

    return (
        <div className="w-[360px] rounded-lg bg-white p-4 shadow-md">
            {/* Image with Discount and Favorite */}
            <div className="relative">
                <img src={imageUrl} alt={title} className="rounded-lg" />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {discount}% OFF
                </div>
                <div className="absolute top-2 right-2">
                    {/* Replace with your favorite icon */}
                    <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
            </div>

            {/* Product Details */}
            <div className="mt-4">
                <h3 className="text-lg text-gray-500 font-medium">{title}</h3>
                <div className="flex items-center justify-between mt-2">
                    <div className="text-3xl font-bold text-gray-900">${price}</div>
                    <div className="flex items-center">
                        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.77 1.98l-2.98 2.388a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.98-2.388a1 1 0 00-1.175 0l-2.98 2.388c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.601-.74-.197-1.98.77-1.98h3.462a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <span className="ml-1 text-gray-700">{rating}</span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center justify-between">
                <button className="border rounded-lg px-6 py-3 text-gray-700">
                    {/* Replace with your show icon */}
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </button>
                <button className="bg-blue-500 text-white rounded-lg px-8 py-3 hover:bg-blue-600">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;