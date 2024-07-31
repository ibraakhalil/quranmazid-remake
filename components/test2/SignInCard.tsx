// components/SignInCard.js
'use client'; // for using client side code in next.js

import { useState } from 'react';

const SignInCard = () => {
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="rounded-lg shadow-lg p-8 max-w-sm mx-auto w-[400px] bg-white">
            <h2 className="text-2xl font-bold mb-6">Sign in to our platform</h2>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    defaultValue="name@company.com" // This is just placeholder data, remove in your actual application
                />
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Your password
                </label>
                <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <div
                        onClick={handleRememberMeChange}
                        className={`w-4 h-4 rounded border ${rememberMe ? 'bg-blue-500 border-blue-500' : 'border-gray-300'} flex items-center justify-center cursor-pointer`}
                    >
                        {rememberMe && <div className="w-2 h-2 bg-white rounded"></div>}
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                        Remember me
                    </label>
                </div>
                <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
                    Lost Password?
                </a>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full">
                Login to your account
            </button>

            <p className="mt-4 text-center text-gray-500">
                Not registered?{' '}
                <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
                    Create account
                </a>
            </p>
        </div>
    );
};

export default SignInCard;