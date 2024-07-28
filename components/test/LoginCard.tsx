// Login.js

import Image from 'next/image';
import React from 'react';

const Login = () => {
    return (
        <div className="w-[400px] mx-auto rounded-lg bg-white p-8 shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

            {/* Username Field */}
            <div className="mb-4 relative">
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Type your username"
                    className="w-full border rounded-lg py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:border-blue-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Type your password"
                    className="w-full border rounded-lg py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:border-blue-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end mb-4">
                <a href="#" className="text-sm text-blue-500 hover:text-blue-700">Forgot password?</a>
            </div>

            {/* Login Button */}
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                LOGIN
            </button>

            {/* Social Login */}
            <div className="mt-4 text-center">
                <p className="text-gray-500 mb-2">Or Sign Up Using</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        <Image src={"/icons/google.png"} width={36} height={36} alt='gooole' />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-600">
                        <Image src={"/icons/telegram.png"} width={36} height={36} alt='gooole' />
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-800">
                        <Image src={"/icons/fb.png"} width={36} height={36} alt='gooole' />
                    </a>
                </div>
            </div>

            {/* Signup Link */}
            <div className="mt-8 text-center">
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                    Or Sign Up Using <br /> SIGN UP
                </a>
            </div>
        </div>
    );
};

export default Login;