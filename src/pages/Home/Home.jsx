import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner />
            <HowItWorks />
            <Services />
        </div>
    );
};

export default Home;