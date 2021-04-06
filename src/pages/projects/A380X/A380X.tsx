import React from 'react';

import { Hero } from '../../../components/projects/A380X/Hero';
import { Features } from '../../../components/projects/A380X/Features';
import { ExtendedFeatures } from '../../../components/projects/A380X/ExtendedFeatures';
import { Showcase } from '../../../components/projects/A380X/Showcase';

export const A380X: React.FC = () => (
    <>
        <Hero />
        <Features />
        <ExtendedFeatures />
        <Showcase />
    </>
);
