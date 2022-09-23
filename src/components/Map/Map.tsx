import dynamic from 'next/dynamic';
import type { MapProps } from '@flybywiresim/react-components';

const Map = dynamic<MapProps>(
    () => import('@flybywiresim/react-components').then((mod) => mod.Map),
    { ssr: false },
);

export default Map;
