import Banner from "./Banner";
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
        </div>
    );
};

export default Home;