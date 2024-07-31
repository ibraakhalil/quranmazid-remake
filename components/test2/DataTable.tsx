'use client'
import { useState } from 'react';
import ThreeDotSvg from '../svg/ThreeDotSvg';

const emails = [
    { status: 'Success', email: 'ken99@yahoo.com', amount: '$316.00' },
    { status: 'Success', email: 'abe45@gmail.com', amount: '$242.00' },
    { status: 'Processing', email: 'monserrat44@gmail.com', amount: '$837.00' },
    { status: 'Success', email: 'silas22@gmail.com', amount: '$874.00' },
    { status: 'Failed', email: 'carmella@hotmail.com', amount: '$721.00' },
];

const DataTable = () => {
    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowSelect = (index: any) => {
        setSelectedRows((prev: any) =>
            prev.includes(index)
                ? prev.filter((i: any) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="container mx-auto p-4 w-[600px]">
            {/* Header */}
            <div className="flex justify-between mb-4 bg-gray-100 rounded-md p-2">
                <input
                    type="text"
                    placeholder="Filter emails..."
                    className="rounded-md border px-3 py-2 focus:outline-none"
                />
                <div className="relative">
                    <button className="rounded-md border px-3 py-2 focus:outline-none">
                        Columns <span className="ml-2">▼</span>
                    </button>
                    {/* Dropdown content (can be added here) */}
                </div>
            </div>

            {/* Table */}
            <table className="w-full border-collapse bg-gray-100 rounded-md border-none">
                <thead>
                    <tr className='border-none'>
                        <th className="px-4 py-2">
                            <input type="checkbox" />
                        </th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Amount</th>
                        <th className="px-4 py-2 border"></th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border">
                                <input
                                    type="checkbox"
                                    checked={selectedRows.includes(index)}
                                    onChange={() => handleRowSelect(index)}
                                />
                            </td>
                            <td className="px-4 py-2 border">{email.status}</td>
                            <td className="px-4 py-2 border">{email.email}</td>
                            <td className="px-4 py-2 border">{email.amount}</td>
                            <td className="px-4 py-2 border">
                                <ThreeDotSvg />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Footer */}
            <div className="flex justify-between mt-4">
                <span>{selectedRows.length} of 5 row(s) selected.</span>
                <div>
                    <button className="bg-white rounded-md border px-3 py-2 focus:outline-none mr-2">
                        Previous
                    </button>
                    <button className="bg-white rounded-md border px-3 py-2 focus:outline-none">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataTable;