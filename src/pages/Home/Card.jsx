

const Card = ({ title, description, icon }) => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000"
             className="card w-full bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body items-center text-center">
                {icon}
                <h3 className="card-title text-2xl  font-semibold">{title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default Card;