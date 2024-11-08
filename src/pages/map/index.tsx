import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { NextPage } from 'next';
import Section from '../../components/Utils/Section';

const LeafletMap = dynamic(() => import('../../components/Map/Map'), { ssr: false });

const Map: NextPage = () => (
    <Section theme="dark" className="w-screen h-screen py-0">
        <LeafletMap className="w-full h-full" isFullPageMap />
    </Section>
);

export default Map;
