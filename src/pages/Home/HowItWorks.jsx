


import { FaTruck, FaMoneyBillWave, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa'; // Example icons from react-icons
import Card from './Card';

const cardsData = [
    {
        title: 'Booking Pick & Drop',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
        icon: <FaTruck className="w-12 h-12 mb-4 text-primary" />
    },
    {
        title: 'Cash On Delivery',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
        icon: <FaMoneyBillWave className="w-12 h-12 mb-4 text-primary" />
    },
    {
        title: 'Delivery Hub',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
        icon: <FaMapMarkerAlt className="w-12 h-12 mb-4 text-primary" />
    },
    {
        title: 'Booking SME & Corporate',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
        icon: <FaBuilding className="w-12 h-12 mb-4 text-primary" />
    }
];

const HowItWorks = () => {
    return (
        <div className="container mx-auto py-16 px-4 ">
            <h2 className="text-4xl font-bold mb-12 text-center ">How it Works</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;