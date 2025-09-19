import Banner from "./Banner";
import Brands from "./Brands";
import HowItWorks from "./HowItWorks";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner />
            <HowItWorks />
            <Services />
            <Brands />
        </div>
    );
};

export default Home;