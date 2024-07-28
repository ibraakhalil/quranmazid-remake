'use client'
import { useState } from 'react';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle email submission (e.g., send to API)
        console.log('Email submitted:', email);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-[640px]">
            <h2 className="text-2xl font-bold mb-2">Get more updates...</h2>
            <p className="text-gray-600 mb-4 text-sm">
                Do you want to get notified when a new component is added to Flowbite? Sign up for our
                newsletter and you'll be among the first to find out about new features, components,
                versions, and tools.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                    <div className="flex-grow">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address..."
                                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md ml-4"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
            <p className="text-sm text-gray-500 mt-4">
                By subscribing, you agree with ConvertKit's{' '}
                <a href="#" className="text-blue-500 hover:underline">
                    Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-500 hover:underline">
                    Privacy Policy
                </a>
                .
            </p>
        </div>
    );
}