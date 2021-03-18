import React from 'react';

import { A32NXProjHeader } from '../../../components/projects/A32NX/A32NXProjHeader';
import { Features } from '../../../components/projects/A32NX/Features';
import { ExtendedFeatures } from '../../../components/projects/A32NX/ExtendedFeatures';
import { Download } from '../../../components/projects/A32NX/Download';

export const A32NX: React.FC = () => (
    <>
        <A32NXProjHeader />
        <Features />
        <ExtendedFeatures />
        <Download />
    </>
);
