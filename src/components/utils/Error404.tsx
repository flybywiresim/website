import React from 'react';
import bgVideo from '../../assets/video/A32NX.mp4';


export const Error404 = () => {
    return (
        <>
            <div className="mx-auto my-80 max-w-md md:max-w-7xl text-center ">
                <h5 className="font-bold text-9xl text-blue-light">404</h5>
                <h2 className="font-bold text-4xl mt-12">
                    Oh no! It seems like the URL that you requested from us doesn&apos;t exist.
                </h2>
                <h1 className="font-medium text-xl text-grey-light mt-4">
                    If you believe this was a mistake, reach out to us through our Discord,
                    or return to the homepage.
                </h1>
            </div>
            <video className="absolute top-0 h-screen object-cover w-screen opacity-10"
                src={bgVideo} playsInline autoPlay
                muted loop />
        </>
    );
};
