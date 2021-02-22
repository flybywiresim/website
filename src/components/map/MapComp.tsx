import React from 'react';
import { Map } from '@flybywiresim/map';

export const MapComp: React.FC = () => {
    return (
        <>
            <div className=" h-screen bg-blue-dark-contrast">
                <div className="relative h-screen pt-20 text-black z-20">
                    <Map refreshInterval={10_000} disableMenu={true} disableWeather={false} disableScroll={false} forceTileset={'carto-light'} />
                </div>
            </div>
        </>
    );
};
