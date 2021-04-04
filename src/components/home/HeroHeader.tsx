import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.scss';

export const HeroHeader: React.FC = ({ children }) => {
    return (
        <>
            <Swiper id="main">
                {children}
            </Swiper>
        </>
    );
};
