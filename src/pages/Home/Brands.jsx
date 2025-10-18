import Marquee from "react-fast-marquee";

import amazon from "../../assets/brands/amazon.png";
import amazonVector from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import startPeople from "../../assets/brands/start-people 1.png";
import start from "../../assets/brands/start.png";

const clients = [amazon, amazonVector, casio, moonstar, randstad, startPeople, start];

const Brands = () => {
    return (
        <div className="my-10 py-16 px-4 ">
            <h3 className="text-2xl font-bold text-center my-10"> We've helped thousands of sales teams</h3>
            <Marquee gradient={false} speed={100} pauseOnHover={true} className="bg-white py-3 rounded-md">
                {clients.map((logo, i) => (
                    <img
                        key={i}
                        src={logo}
                        alt={`Client ${i}`}
                        className="h-8 mx-8"
                    />
                ))}
            </Marquee>
        </div>

    );
};

export default Brands;
