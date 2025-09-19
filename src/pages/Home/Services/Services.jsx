import { CiDeliveryTruck } from "react-icons/ci";
import ServiceCard from "./ServicesCard";


const services = [
    {
        "title": "Express & Standard Delivery",
        "description": "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        "icon": <CiDeliveryTruck />
    },
    {
        "title": "Nationwide Delivery",
        "description": "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        "icon": <CiDeliveryTruck />
    },
    {
        "title": "Fulfillment Solution",
        "description": "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        "icon": <CiDeliveryTruck />

    },
    {
        "title": "Cash on Home Delivery",
        "description": "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        "icon": <CiDeliveryTruck />
    },
    {
        "title": "Corporate Service / Contract In Logistics",
        "description": "Customized corporate services which includes warehouse and inventory management support.",
        "icon": <CiDeliveryTruck />
    },
    {
        "title": "Parcel Return",
        "description": "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        "icon": <CiDeliveryTruck />
    }
];

const Services = () => {
    return (
        <div className="bg-primary p-16 rounded-4xl">
            <div className="container mx-auto text-center text-white mb-12">
                <h2 className="text-4xl font-bold">Our Services</h2>
                <p className="mt-4 max-w-2xl mx-auto opacity-80">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        className={index === 1 ? 'bg-lime-300' : 'bg-white'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;