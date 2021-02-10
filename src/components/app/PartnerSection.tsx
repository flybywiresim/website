import React, { PropsWithChildren } from 'react';
import Flighsimto from '../../assets/img/partners/flightsimto.png';
import FSNews from '../../assets/img/partners/fsnews.png';
import YourControls from '../../assets/img/partners/yourcontrols.png';

type ImageProps = {
    src: string
}
type PartnerProps = {
    name?: string,
    path?: string
}

export const PartnerImage: React.FC<ImageProps> = (props: PropsWithChildren<ImageProps>) => {
    return (
        <div className="p-8 h-full">
            <img className="h-full w-full object-contain" src={props.src} alt=""/>
        </div>
    );
};

export const Partner: React.FC<PartnerProps> = (props:PropsWithChildren<PartnerProps>) => {
    return(
        <div id={props.name} className="flex flex-col h-full justify-center" data-aos="zoom-in">
            <a href={props.path} target="_blank" rel="noreferrer">
                {props.children}
            </a>
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
            <div className="w-full sm:w-3/4 grid grid-cols-1 lg:grid-cols-3 mt-8 mx-auto">
                <Partner name="Flightsim.to" path="https://flightsim.to/">
                    <PartnerImage src={Flighsimto} />
                </Partner>
                <Partner name="FSNews" path="https://fsnews.eu/">
                    <PartnerImage src={FSNews} />
                </Partner>
                <Partner name="YourControls" path="https://github.com/Sequal32/yourcontrols">
                    <PartnerImage src={YourControls} />
                </Partner>

            </div>
        </div>
    );
}
