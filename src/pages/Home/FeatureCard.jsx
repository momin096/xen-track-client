
const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card  bg-white shadow-xl rounded-box p-6 flex flex-col lg:flex-row items-center justify-center  text-center lg:text-left gap-5">
      {/* Image / Illustration Section */}
      <figure className="flex justify-center items-center p-4 lg:border-r-2 border-gray-300 border-dashed">
        <img src={imageSrc} alt={title} className="w-full h-full" /> 
      </figure>

      {/* Text Content Section */}
      <div className="card-body p-4 pt-6 lg:pt-4"> {/* Adjusted padding for better alignment */}
        <h3 className="text-2xl font-bold text-neutral mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;