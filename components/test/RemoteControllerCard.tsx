'use client'
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { BiRefresh } from "react-icons/bi";

export default function RemoteControlCard() {
    const [id, setId] = useState("883 992 234");
    const [password, setPassword] = useState("aakd2239djq");

    const copyId = () => {
        navigator.clipboard.writeText(id);
    };
    const refreshPassword = () => {
        setPassword(
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
        );
    };

    return (
        <div className="w-[450px] rounded-md bg-white shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">Remote control</h2>
            <p className="text-gray-600 mb-4">
                To share access with your device to someone.
            </p>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    YOUR ID
                </label>
                <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 px-3 py-2">
                    <input
                        type="text"
                        className="w-full bg-transparent rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        readOnly
                    />
                    <button
                        type="button"
                        className="ml-2 rounded-full bg-gray-200 p-2"
                        onClick={copyId}
                    >
                        <FiCopy className="text-gray-500" />
                    </button>
                </div>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    PASSWORD
                </label>
                <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 px-3 py-2">
                    <input
                        type="text"
                        className="w-full rounded-md border-none bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password}
                        readOnly
                    />
                    <button
                        type="button"
                        className="ml-2 rounded-full bg-gray-200 p-2"
                        onClick={refreshPassword}
                    >
                        <BiRefresh className="text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
    );
}