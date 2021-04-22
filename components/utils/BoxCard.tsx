import React, { PropsWithChildren } from 'react';
import { Button } from './Button';

type ImageProps = {
    className?: string,
    src: string,
    alt?: string
};

type BodyProps = {
    path: string
};

export const BoxImage: React.FC<ImageProps> = (props: PropsWithChildren<ImageProps>) => (
    <img className={`mx-auto mt-3 ${props.className}`} src={props.src} alt={props.alt} />
);

/**
 * Max recommended body size: 300 characters
 */
export const BoxBody: React.FC<BodyProps> = (props: PropsWithChildren<BodyProps>) => (
    <div className="px-8 py-8 max-w-xl text-justify">
        {props.children}
        <a href={props.path} target="_blank" rel="noreferrer">
            <Button className="w-full mt-4 bg-teal-light-contrast border-2 border-teal-light-contrast hover:bg-white hover:text-teal-light-contrast font-bold">Learn More</Button>
        </a>
    </div>
);

export const BoxCard: React.FC = ({ children }) => (
    <div className="max-w-full h-full transform hover:scale-105 transition-transform duration-200 bg-blue-dark-contrast shadow-xl hover:shadow-2xl rounded-md">
        {children}
    </div>
);
