import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

type SwiperProps = {
    className?: string;
    autoplayDuration?: number;
}

SwiperCore.use([Pagination]);
// <SwiperProps>

// props,
export const HeroSwiper: React.FC<SwiperProps> = (props, { children }) => (
    <>
        <Swiper
            // className={props.className}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: props.autoplayDuration,
                disableOnInteraction: false,
            }}
        >
            {children}
        </Swiper>
    </>
);
