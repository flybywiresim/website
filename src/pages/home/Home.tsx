import React from 'react';

import { Header } from '../../components/home/Header';
import { Installer } from '../../components/home/Installer';
import { Community } from '../../components/home/Community';
import { Discord } from '../../components/home/Discord';
import { PartnerSection } from '../../components/home/PartnerSection';
import { Donate } from '../../components/home/Donate';

export const Home: React.FC = () => (
    <>
        <Header />
        <Installer />
        <Community />
        <Discord />
        <PartnerSection />
        <Donate />
    </>
);
