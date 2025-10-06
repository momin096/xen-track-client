import image from '../../assets/location-merchant.png'
import bg from '../../assets/be-a-merchant-bg.png'

const BeMerchant = () => {
  return (
    <div className=" py-5 px-4 my-10">
      <div className="container mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
        {/* Background Overlay with Wave Pattern */}
        <div
          className="absolute inset-0 z-0 bg-teal-950"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between ">
          {/* Left Side: Text and Buttons */}
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="text-white text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Merchant and Customer Satisfaction <br className="hidden md:inline" /> is Our First Priority
            </h1>
            <p className="text-sm lg:text-base max-w-lg mx-auto lg:mx-0 opacity-80 mb-6">
              We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="btn bg-lime-300 text-teal-950  font-bold rounded-full px-8">
                Become a Merchant
              </button>
              <button className="btn btn-ghost text-white font-semibold rounded-full px-8 border-2 border-white/50">
                Earn with Profast Courier
              </button>
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div
            data-aos="fade-left"
            data-aos-duration="2000" className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={image}
              alt="Packages illustration"
              className="w-full max-w-xs md:max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;