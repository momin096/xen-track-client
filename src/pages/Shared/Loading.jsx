import Lottie from "lottie-react";

import loading from '../../assets/json/loading.json'

const Loading = () => {
    return (
        <div className="mx-auto flex justify-center items-center h-screen">
            <Lottie animationData={loading} />
        </div>
    );
};

export default Loading;