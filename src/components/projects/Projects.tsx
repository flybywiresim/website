import React from 'react';
import bgVideo from '../../assets/video/A32NX.mp4';

export const Projects: React.FC = () => (
    <>
        <div className="relative mx-auto px-2 my-80 max-w-md md:max-w-4xl text-center z-20">
            <h1 className="text-8xl text-blue-light font-bold">Coming Soon</h1>
            <p className="mt-4 pt-4 text-4xl font-bold">
                    Content is coming soon to this page, check back later.
            </p>
        </div>

        <video className="absolute top-0 h-screen object-cover w-screen opacity-10"
            src={bgVideo} playsInline autoPlay
            muted loop />
    </>
);
