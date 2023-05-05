import { FC } from 'react';
import dynamic from 'next/dynamic';

import 'leaflet/dist/leaflet.css';

const LeafletMap = dynamic(() => import('./map'), { ssr: false });

const Map: FC = () => (
    <LeafletMap />
);

export default Map;
