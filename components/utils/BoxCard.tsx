import React, { PropsWithChildren } from 'react';

type ImageProps = {
    className?: string,
    src: string,
    alt?: string
};

export const BoxImage: React.FC<ImageProps> = (props: PropsWithChildren<ImageProps>) => (
    <img className={`mx-auto mt-3 ${props.className}`} src={props.src} alt={props.alt} />
);

/**
 * Max recommended body size: 300 characters
 */
export const BoxBody: React.FC = ({ children }) => (
    <div className="px-8 py-8 text-center max-w-xl text-justify">
        {children}
    </div>
);

export const BoxCard: React.FC = ({ children }) => (
    <div className="max-w-full h-full transform hover:scale-105 transition-transform bg-blue-dark-contrast shadow-xl hover:shadow-2xl rounded-md">
        {children}
    </div>
);
