import { FC, useEffect, useState } from 'react';
import { Telex, TelexConnection } from '@flybywiresim/api-client';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

import Section from '../../components/Utils/Section';

class AircraftIcon extends Icon {
    createIcon(_oldIcon?: HTMLElement): HTMLElement {
        const span = document.createElement('div');

        span.textContent = 'bruh';
        span.style.color = 'red';
        span.style.position = 'absolute';

        return span;
    }
}

const numberFormat = new Intl.NumberFormat();

const LeafletMap: FC = () => {
    const [flights, setFlights] = useState<TelexConnection[]>([]);

    useEffect(() => {
        Telex.fetchAllConnections().then((flights) => setFlights(flights));
    }, []);

    const position = [51.505, -0.09];

    return (
        <Section theme="dark" className="py-0">
            <MapContainer center={position as any} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {flights.map((it) => (
                    <Marker key={it.id} icon={new AircraftIcon({ iconUrl: '' })} position={[it.location.y, it.location.x]}>
                        <Popup className="" minWidth={360} maxWidth={360}>
                            <div className="flex flex-col gap-y-4 bg-navy px-5 py-4 text-white rounded-xl" style={{ width: '360px' }}>
                                <span className="font-display text-4xl text-primary font-bold">{it.flight}</span>

                                <span className="font-body text-xl font-semibold text-gray-200">{it.aircraftType}</span>

                                <span className="flex justify-center">
                                    <span className="flex divide-x-2 divide-gray-600">
                                        <span className="flex flex-col items-center px-8 text-2xl font-semibold">
                                            <span className="font-mono">{it.heading.toFixed(0).padStart(3, '0')}</span>
                                            <span className="font-display text-xl text-gray-400">HDG</span>
                                        </span>

                                        <span className="flex flex-col items-center px-8 text-2xl font-semibold">
                                            <span className="font-mono">{numberFormat.format(it.trueAltitude)}</span>
                                            <span className="font-display text-xl text-gray-400">ALT</span>
                                        </span>

                                        <span className="flex flex-col items-center px-8 text-2xl font-semibold">
                                            <span className="font-mono">{numberFormat.format(342)}</span>
                                            <span className="font-display text-xl text-gray-400">TAS</span>
                                        </span>
                                    </span>
                                </span>

                                <span className="flex">
                                    <span className="font-mono text-3xl">{it.origin || '----'}</span>
                                    <span className="font-mono text-3xl text-gray-400">/</span>
                                    <span className="font-mono text-3xl">{it.destination || '----'}</span>
                                </span>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Section>
    );
};

export default LeafletMap;
