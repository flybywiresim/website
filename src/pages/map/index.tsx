import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { NextPage } from 'next';

const LeafletMap = dynamic(() => import('../../components/Map/Map'), { ssr: false });

const Map: NextPage = () => (
    <LeafletMap />
);

export default Map;
