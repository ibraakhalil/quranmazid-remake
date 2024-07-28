import React from 'react';
import Image from 'next/image';
import avatarSrc from '../../public/images/user.avif'
import linkedin from '../../public/images/linkedin.png'
import github from '../../public/images/github.png'
import message from '../../public/images/message.png'



const ProfileCard = () => {
    const name = "Frontend Web Developer"
    const title = "Ibrahim Khalil"

    return (
        <div className="w-[300px] rounded-lg bg-white flex flex-col items-center shadow-md">
            {/* Blue background section */}
            <div className="w-full h-24 bg-blue-500 rounded-t-lg" />

            {/* Avatar */}
            <div className="relative -mt-12">
                <Image
                    src={avatarSrc}
                    alt="Avatar"
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-blue-500"
                />
            </div>

            {/* Name and Title */}
            <h2 className="text-lg font-bold mt-4">{name}</h2>
            <p className="text-gray-600">{title}</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
                {/* Replace these with actual links to social profiles */}
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <Image src={github} alt="GitHub" width={24} height={24} />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <Image src={message} alt="GitHub" width={24} height={24} />
                </a>
            </div>

            {/* Message Button */}
            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg w-[140px] mt-6 mb-5 hover:bg-blue-600">
                Message
            </button>
        </div>
    );
};

export default ProfileCard;