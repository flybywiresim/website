import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

export const HeroHeader: React.FC = ({ children }) => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {children}
            </Swiper>
        </>
    );
};
