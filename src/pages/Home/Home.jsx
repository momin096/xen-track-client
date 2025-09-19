import Banner from "./Banner";
import BeMerchant from "./BeMerchant";
import Brands from "./Brands";
import HowItWorks from "./HowItWorks";
import KeyFeatures from "./KeyFeatures";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner />
            <HowItWorks />
            <Services />
            <Brands />
            <KeyFeatures />
            <BeMerchant />
        </div>
    );
};

export default Home;