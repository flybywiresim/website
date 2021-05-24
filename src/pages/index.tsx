// import { SwiperSlide } from 'swiper/react';
// import { HeroSwiper } from '../../components/home/HeroSwiper';
import { A320Header } from '../components/home/headers/A320Header';
// import { A380Header } from '../../components/home/headers/A380Header';

import { Installer } from '../components/home/Installer';
import { Community } from '../components/home/Community';
import { PartnerSection } from '../components/home/PartnerSection';
import { Donate } from '../components/home/Donate';

const Index = () => (
    <>
        <A320Header />
        {/* Disabled until better preview can be given */}
        {/*  <HeroSwiper>
             <SwiperSlide>
                <A380Header />
            </SwiperSlide>
        </HeroSwiper> */}
        <Installer />
        <Community />
        <PartnerSection />
        <Donate />
    </>
);

export default Index;
