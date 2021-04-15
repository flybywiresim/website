import React from 'react';

import { Hero } from '../components/projects/A32NX/Hero';
import { Features } from '../components/projects/A32NX/Features';
import { ExtendedFeatures } from '../components/projects/A32NX/ExtendedFeatures';
import { Download } from '../components/projects/A32NX/Download';

const A32nx: React.FC = () => (
    <>
        <Hero />
        <Features />
        <ExtendedFeatures />
        <Download />
    </>
);

export default A32nx;
