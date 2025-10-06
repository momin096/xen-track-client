
const ServiceCard = ({ title, description, icon }) => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000"
            className={`card shadow-xl p-8 rounded-lg text-neutral-content hover:bg-lime-200 bg-white transition-all duration-300 ease-in-out`}>
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