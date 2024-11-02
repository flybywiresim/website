import { FC, useEffect, useState } from 'react';
import { Telex, TelexConnection } from '@flybywiresim/api-client';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import { ArrowRightOutlined } from '@ant-design/icons';

const AircraftIcon = (heading: number, aircraftId: string, aircraftType: string) => {
    let aircraftIconUrl = '/meta/aircraft-icon.png';
    let aircraftIconSize = 28;
    if (aircraftType.includes('A32')) {
        aircraftIconUrl = '/meta/aircraft-icon-a32nx.png';
    }
    if (aircraftType.includes('A38')) {
        aircraftIconUrl = '/meta/aircraft-icon-a380x.png'; aircraftIconSize = 38;
    }
    const aircraftIconStyle = `transform:rotate(${heading}deg);transform-origin:center;width:${aircraftIconSize}px;height:${aircraftIconSize}px;filter:drop-shadow(0 0 2px rgba(0 0 0 /0.5))`;

    return new DivIcon({
        iconSize: [0, 0],
        iconAnchor: [15, 10],
        html: `<img src="${aircraftIconUrl}" alt="${aircraftId}" style="${aircraftIconStyle}"/>`,
    });
};

const numberFormat = new Intl.NumberFormat();

export interface LeafletMapProps {
    isFullPageMap: boolean;

    className?: string;
}

const LeafletMap: FC<LeafletMapProps> = ({ isFullPageMap, className }) => {
    const [flights, setFlights] = useState<TelexConnection[]>([]);

    const MapLegend = () => (
        <div className="leaflet-bottom leaflet-left">
            <div className="leaflet-control">
                <div className="bg-light p-4 text-secondary font-mono">
                    <span className="items-center inline-flex gap-x-2 mr-4 xl:flex xl:gap-x-4 xl:mr-0">
                        <img className="inline" src="/meta/aircraft-icon-a32nx.png" style={{ height: 28, width: 28 }} />
                        <h4>
                            <span className="hidden lg:inline">FlyByWire </span>
                            A32NX
                        </h4>
                    </span>
                    <span className="items-center inline-flex gap-x-2 mr-4 xl:flex xl:gap-x-4 xl:mr-0">
                        <img className="inline" src="/meta/aircraft-icon-a380x.png" style={{ height: 28, width: 28 }} />
                        <h4>
                            <span className="hidden lg:inline">FlyByWire </span>
                            A380X
                        </h4>
                    </span>
                    <span className="items-center inline-flex gap-x-2 mr-4 xl:flex xl:gap-x-4 xl:mr-0">
                        <img className="inline" src="/meta/aircraft-icon.png" style={{ height: 28, width: 28 }} />
                        <h4>Others</h4>
                    </span>
                </div>
            </div>
        </div>
    );

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
                    <Marker key={it.id} icon={AircraftIcon(it.heading, it.id, it.aircraftType)} position={[it.location.y, it.location.x]}>
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
                <MapLegend />
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
