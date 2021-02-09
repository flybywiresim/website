import React, { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    className?: string
}
type CardProps = {
    icon?: IconProp
}

export const CardTitle: React.FC<Props> = (props) => {
    return(
        <h3 className={`${props.className} 'mt-8 pb-4 text-xl text-blue-200 font-medium'`}>{props.children}</h3>
    );
};

export const CardBody: React.FC<Props> = (props) => {
    return(
        <p className={`${props.className} 'mt-5 text-base'`}>
            {props.children}
        </p>
    );
};

export const Card: React.FC<PropsWithChildren<CardProps>> = (props: PropsWithChildren<CardProps>): JSX.Element => (
    <div className="pt-6" data-aos="zoom-in">
        <div
            className="h-full flow-root transform hover:scale-105 transition-transform duration-100 bg-gray-800 rounded-lg px-6 pb-8">
            <div className="-mt-6">
                <span
                    className="inline-flex items-center justify-center p-3 bg-blue-light rounded-md shadow-lg">
                    {props.icon && <FontAwesomeIcon icon={props.icon} size="2x" />}
                </span>
            </div>
            <div className="mt-3">
                {props.children}
            </div>
        </div>
    </div>
);
