import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = Partial<{
    className: string
}>;

type CardProps = Partial<{
    icon: IconProp
}>;

export const CardTitle: React.FC<Props> = (props) => {
    return (
        <h3 className={`${props.className} pb-3 text-2xl text-blue-200 font-bold`}>{props.children}</h3>
    );
};

export const CardBody: React.FC<Props> = (props) => {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    );
};

export const Card: React.FC<CardProps> = (props): JSX.Element => (
    <div className="pt-6">
        <div
            className="h-full flow-root transform hover:scale-105 transition-transform duration-100 rounded-lg px-8 pb-8">
            <div className="-mt-6">
                <span
                    className="inline-flex items-center justify-center p-3 w-16 bg-blue-light-contrast rounded-md shadow-lg">
                    {props.icon && <FontAwesomeIcon icon={props.icon} size="2x" />}
                </span>
            </div>
            <div className="mt-3">
                {props.children}
            </div>
        </div>
    </div>
);
