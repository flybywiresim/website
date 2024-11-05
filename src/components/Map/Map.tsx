import { FC, useEffect, useState } from 'react';
import { Telex, TelexConnection } from '@flybywiresim/api-client';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import { ArrowRightOutlined } from '@ant-design/icons';

const AircraftIcon = (heading: number, aircraftId: string) => {
    const aircraftStyle = `transform: rotate(${heading}deg); transform-origin: center; width: 32px; height: 32px; filter: drop-shadow(0 0 2px rgba(0 0 0 /0.5))`;

    return new DivIcon({
        iconSize: [0, 0],
        iconAnchor: [15, 10],
        html: `<img src="/meta/aircraft-icon.png" alt="${aircraftId}" style="${aircraftStyle}"/>`,
    });
};

const numberFormat = new Intl.NumberFormat();

export interface LeafletMapProps {
    isFullPageMap: boolean;

    className?: string;
}

const LeafletMap: FC<LeafletMapProps> = ({ isFullPageMap, className }) => {
    const [flights, setFlights] = useState<TelexConnection[]>([]);

    useEffect(() => {
        Telex.fetchAllConnections().then((flights) => setFlights(flights));
    }, []);

    const position = [51, 5];

    return (
        <div className={`${className} ${isFullPageMap ? 'full-page-map' : ''}`}>
            <MapContainer center={position as any} zoom={5} scrollWheelZoom className="w-full h-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                />

                {flights.map((it) => (
                    <Marker key={it.id} icon={AircraftIcon(it.heading, it.id)} position={[it.location.y, it.location.x]}>
                        <Popup>
                            <div className="bg-secondary p-4 text-white">
                                <span className="flex items-center justify-between gap-x-4">
                                    <h3 className="text-primary">
                                        {it.flight}
                                    </h3>
                                    <span className="flex items-center gap-1">
                                        <h3 className="font-mono">{it.origin || '----'}</h3>
                                        <ArrowRightOutlined style={{ fontSize: '2rem' }} className="text-primary" />
                                        <h3 className="font-mono">{it.destination || '----'}</h3>
                                    </span>
                                </span>
                                <p>{it.aircraftType}</p>

                                <div className="grid grid-cols-3 py-4 text-center">
                                    <span>
                                        <h3 className="p-0 font-mono">{it.heading.toFixed(0).padStart(3, '0')}</h3>
                                        <p>HDG</p>
                                    </span>
                                    <span>
                                        <h3 className="p-0 font-mono">{numberFormat.format(it.trueAltitude)}</h3>
                                        <p>ALT</p>
                                    </span>

                                    <span>
                                        <h3 className="p-0 font-mono">{numberFormat.format(342)}</h3>
                                        <p>TAS</p>
                                    </span>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default LeafletMap;