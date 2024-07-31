'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AboutCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://www.figma.com/file/ZngBuq');

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">About</h2>

      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-gray-600">Members (6,273)</p>
        </div>
        <button className="rounded border border-black px-4 py-1 font-bold text-black hover:bg-blue-700">Import</button>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Find and add people"
          className="w-full rounded-md border border-gray-300 px-4 py-2 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute inset-y-0 left-3 flex items-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>

      <div className="mb-4">
        <p className="text-gray-600">Share an invitation link</p>
        <div className="mt-2 flex items-center">
          <input
            type="text"
            value="https://www.figma.com/file/ZngBuq"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
          <button onClick={handleCopy} className="ml-2 rounded-md bg-gray-200 px-3 py-2 hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${copied ? 'text-green-500' : 'text-gray-500'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-2"
              />
            </svg>
          </button>
        </div>
      </div>

      <h3 className="mb-2 text-lg font-bold">Suggested Members</h3>

      <div className="mb-2 flex items-center">
        <Image src="/images/user.avif" alt="Bayu Nur" width={40} height={40} className="rounded-full" />
        <span className="ml-3 font-medium">Bayu Nur</span>
        <button className="ml-auto rounded-md bg-black px-3 py-2 font-bold text-white hover:bg-blue-700">Add</button>
      </div>

      <div className="mb-2 flex items-center">
        <Image src="/images/user.avif" alt="Aisyah Ardani" width={40} height={40} className="rounded-full" />
        <span className="ml-3 font-medium">Aisyah Ardani</span>
        <button className="ml-auto rounded-md bg-black px-3 py-2 font-bold text-white hover:bg-blue-700">Add</button>
      </div>

      <div className="flex items-center">
        <Image src="/images/user.avif" alt="Jose William" width={40} height={40} className="rounded-full" />
        <span className="ml-3 font-medium">Jose William</span>
        <button className="ml-auto rounded-md bg-black px-3 py-2 font-bold text-white hover:bg-blue-700">Add</button>
      </div>
    </div>
  );
}
