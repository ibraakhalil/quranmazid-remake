'use client'
import { useState } from "react";

export default function PriceCard() {
    const [plan] = useState({
        title: "Basic",
        price: 36,
        features: [
            "Custom Domain",
            "Free Domain for 1 Year",
            "1 Platform",
            "Storage Space 12 Gb",
            "Add Free",
        ],
    });

    return (
        <div className="bg-blue-50 rounded-lg shadow-md p-6 w-72">
            <div className="flex flex-col  mb-6">
                <h2 className="text-lg font-semibold">{plan.title}</h2>
                <h2 className="text-3xl font-bold">
                    ${plan.price}
                    <span className="text-sm font-medium">/month</span>
                </h2>
            </div>
            <ul className="list-disc flex flex-col gap-3 pl-1">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="ml-2">{feature}</span>
                    </li>
                ))}
            </ul>
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full">
                Get Started
            </button>
        </div>
    );
}