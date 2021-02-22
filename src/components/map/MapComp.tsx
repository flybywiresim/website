import React from 'react';
import { Map } from '@flybywiresim/map';

export const MapComp: React.FC = () => {
    return (
        <>
            <div className=" h-screen bg-blue-dark-contrast">
                <div className="relative h-screen pt-20 text-black z-20">
                    <Map />
                </div>
            </div>
        </>
    );
};
