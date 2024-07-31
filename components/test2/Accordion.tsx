'use client'
import { useState } from 'react';

const DownArrowSvg = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const Accordion = ({ title, content, transition }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-white rounded-md shadow-md overflow-hidden max-w-[500px] mx-auto my-4"
        >
            <button
                className="flex justify-between items-center px-4 py-3 w-full text-left font-medium text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <DownArrowSvg
                    className={`${isOpen && 'rotate-180'} transform transition-transform duration-200`}
                />
            </button>
            <div
                className={`${isOpen ? 'max-h-96' : 'max-h-0'
                    } overflow-hidden transition-${transition} duration-300`}
            >
                <p className="px-4 py-3 text-gray-700">{content}</p>
            </div>
        </div>
    );
};

const Accordion2 = () => (
    <div>
        <Accordion
            title="Custom transition using Fade"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            transition="opacity"
        />
        <Accordion
            title="Default transition using Collapse"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            transition="max-height"
        />
    </div>
);

export default Accordion2;