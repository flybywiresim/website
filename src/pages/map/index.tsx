import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { NextPage } from 'next';
import Section from '../../components/Utils/Section';

const LeafletMap = dynamic(() => import('../../components/Map/Map'), { ssr: false });

const Map: NextPage = () => (
    <Section theme={'dark'} className={'py-0'}>
        <LeafletMap />
    </Section>
);

export default Map;
