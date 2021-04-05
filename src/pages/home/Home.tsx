import React from 'react';

import { SwiperSlide } from 'swiper/react';
import { HeroHeader } from '../../components/home/HeroHeader';
import { A320Header } from '../../components/home/headers/A320Header';
import { A380Header } from '../../components/home/headers/A380Header';

import { Installer } from '../../components/home/Installer';
import { Community } from '../../components/home/Community';
import { Discord } from '../../components/home/Discord';
import { PartnerSection } from '../../components/home/PartnerSection';
import { Donate } from '../../components/home/Donate';

export const Home: React.FC = () => (
    <>
        <HeroHeader>
            <SwiperSlide>
                <A320Header />
            </SwiperSlide>
            <SwiperSlide>
                <A380Header />
            </SwiperSlide>
        </HeroHeader>
        <Installer />
        <Community />
        <Discord />
        <PartnerSection />
        <Donate />
    </>
);
