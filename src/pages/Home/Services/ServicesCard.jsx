
const ServiceCard = ({ title, description, className = '', icon }) => {
    return (
        <div className={`card shadow-xl p-8 rounded-lg text-neutral-content ${className}`}>
            <div className="card-body p-0 items-center text-center">
                {/* Placeholder for the icon, you'd add a React icon here */}
                <div className="w-16 h-16 bg-gray-100 rounded-full mb-4 flex justify-center items-center">
                    <span className="text-5xl text-primary">{icon}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral">{title}</h3>
                <p className="text-sm mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;