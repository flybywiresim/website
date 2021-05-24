import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapProps } from '@flybywiresim/react-components';

const MapDisplay = dynamic<MapProps>(
    () => import('@flybywiresim/react-components').then((mod) => mod.Map),
    { ssr: false },
);

const Map = () => {
    const [mapRefreshInterval, setMapRefreshInterval] = useState(5_000);

    useEffect(() => {
        const interval = setInterval(() => {
            setMapRefreshInterval(document.visibilityState === 'visible' ? 10_000 : 100_000);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <main className=" h-screen bg-blue-dark-contrast">
                <div className="relative h-screen pt-20 text-black z-20">
                    <MapDisplay refreshInterval={mapRefreshInterval} />
                </div>
            </main>
        </>
    );
};

export default Map;
