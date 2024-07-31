// components/LatestCustomerCard.js

import Image from "next/image";

const customers = [
    {
        id: 1,
        name: "Neil Sims",
        email: "email@windster.com",
        cost: "$320",
        image: "/images/user.avif", // Replace with actual image paths
    },
    {
        id: 2,
        name: "Bonnie Green",
        email: "email@windster.com",
        cost: "$3467",
        image: "/images/user.avif",
    },
    {
        id: 3,
        name: "Michael Gough",
        email: "email@windster.com",
        cost: "$67",
        image: "/images/user.avif",
    },
    {
        id: 4,
        name: "Lana Byrd",
        email: "email@windster.com",
        cost: "$367",
        image: "/images/user.avif",
    },
    {
        id: 5,
        name: "Thomes Lean",
        email: "email@windster.com",
        cost: "$2367",
        image: "/images/user.avif",
    },
];

const LatestCustomerCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-[400px]">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Latest Customers</h2>
                <button className="text-blue-500">View all</button>
            </div>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id} className="flex items-center py-3 border-b border-gray-200">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                            <Image
                                src={customer.image}
                                alt={customer.name}
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow">
                            <div className="font-medium">{customer.name}</div>
                            <div className="text-gray-500 text-sm">{customer.email}</div>
                        </div>
                        <div className="font-medium">{customer.cost}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LatestCustomerCard;