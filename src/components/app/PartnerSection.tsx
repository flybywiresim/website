import React, { PropsWithChildren } from 'react';
import duck from '../../assets/img/duck.jpg';

type ImageProps = {
    src: string
}
export const PartnerImage: React.FC<ImageProps> = (props: PropsWithChildren<ImageProps>) => {
    return (
        <div className="p-2 h-full">
            <img src={props.src && duck} alt=""/>
        </div>
    );
};

export const Partner: React.FC = (props) => {
    return(
        <div className="flex flex-col h-full">
            {props.children}
        </div>
    );
};

export function PartnerSection(): JSX.Element {
    return(
        <div className="relative w-full px-10 py-14">
            <div className="w-1/2 2xl:w-1/4 text-center mx-auto divide-y divide-gray-400">
                <h2 className="text-base font-semibold tracking-wider text-blue-200 uppercase">OUR AFFILIATED</h2>
                <p className="mt-3 pt-3 text-5xl font-extrabold text-blue-light">
                    Partners
                </p>
            </div>
            <div className="grid grid-cols-3 mt-8 mx-auto w-1/2">
                <Partner>
                    <PartnerImage src={duck} />
                </Partner>
                <Partner>
                    <PartnerImage src={duck} />
                </Partner>
                <Partner>
                    <PartnerImage src={duck} />
                </Partner>
            </div>
            <div className="flex flex-row mx-auto w-1/2">
                <Partner>
                    <PartnerImage src={duck} />
                </Partner>
                <Partner>
                    <PartnerImage src={duck} />
                </Partner>
            </div>
        </div>
    );
}
