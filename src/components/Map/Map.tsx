import { FC, useEffect, useState } from 'react';
import { Telex, TelexConnection } from '@flybywiresim/api-client';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { ArrowRightOutlined } from '@ant-design/icons';
import Section from '../Utils/Section';

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
        <Section theme="light" className="py-0">
            <MapContainer center={position as any} zoom={13} scrollWheelZoom style={{ width: '100%', height: '100vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {flights.map((it) => (
                    <Marker key={it.id} icon={new AircraftIcon({ iconUrl: '' })} position={[it.location.y, it.location.x]}>
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
                                        {/* TODO: Add real data here */}
                                        <h3 className="p-0 font-mono">{numberFormat.format(342)}</h3>
                                        <p>TAS</p>
                                    </span>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Section>
    );
};

export default LeafletMap;
