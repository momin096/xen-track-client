import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slide1 from '../../assets/banner/banner1.png'
import Slide2 from '../../assets/banner/banner2.png'
import Slide3 from '../../assets/banner/banner3.png'


const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}> 
            <div>
                <img src={Slide1} />
            </div>
            <div>
                <img src={Slide2} />
            </div>
            <div>
                <img src={Slide3} />
            </div>
        </Carousel>
    );
};

export default Banner;