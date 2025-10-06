import FeatureCard from './FeatureCard';
import liveParcel from '../../assets/live-tracking.png'
import Delivery from '../../assets/safe-delivery.png'

// Data for each feature, including placeholder image URLs
const featuresData = [
    {
        imageSrc: liveParcel,
        title: 'Live Parcel Tracking',
        description: 'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.',
    },
    {
        imageSrc: Delivery,
        title: '100% Safe Delivery',
        description: 'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
    },
    {
        imageSrc: Delivery,
        title: '24/7 Call Center Support',
        description: 'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
    },
];

const KeyFeatures = () => {
    return (
        <section  className="py-16 px-4">

            <div className="container mx-auto max-w-5xl space-y-8"> {/* space-y-8 adds vertical spacing between cards */}
                {featuresData.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        imageSrc={feature.imageSrc}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default KeyFeatures;