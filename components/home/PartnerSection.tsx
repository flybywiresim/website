import React, { PropsWithChildren } from 'react';

type ImageProps = {
    className?: string,
    src: string
};

type PartnerProps = Partial<{
    className?: string,
    name?: string,
    path?: string
}>;

export const PartnerImage: React.FC<ImageProps> = (props: PropsWithChildren<ImageProps>) => (
    <div className={`p-8 h-full ${props.className}`}>
        <img className="h-full w-full object-contain transform hover:scale-105 transition-transform duration-100 filter-grayscale hover:filter-none" src={props.src} alt="" />
    </div>
);

export const Partner: React.FC<PartnerProps> = (props: PropsWithChildren<PartnerProps>) => (
    <div id={props.name} className={`flex flex-col h-full justify-center ${props.className}`}>
        <a href={props.path} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    </div>
);

export function PartnerSection(): JSX.Element {
    return (
        <section className="relative w-full px-10 py-14">
            <div className="w-1/2 2xl:w-1/4 text-center mx-auto divide-y divide-gray-400">
                <h2 className="text-base font-semibold tracking-wider text-blue-200 uppercase">OUR AFFILIATED</h2>
                <p className="mt-3 pt-3 text-5xl font-extrabold text-blue-light">
                    Partners
                </p>
            </div>
            <div className="w-1/2 sm:w-3/5 2xl:w-1/2 grid grid-cols-1 lg:grid-cols-3 mt-8 mx-auto">
                <Partner name="Flightsim.to" path="https://flightsim.to/">
                    <PartnerImage src="img/partners/flightsimto.png" />
                </Partner>
                <Partner name="FSNews" path="https://fsnews.eu/">
                    <PartnerImage src="img/partners/fsnews.png" />
                </Partner>
                <Partner name="YourControls" path="https://github.com/Sequal32/yourcontrols">
                    <PartnerImage src="img/partners/yourcontrols.png" />
                </Partner>
            </div>
            <div className="w-1/2 sm:w-2/6 2xl:w-1/5 grid grid-cols-1 lg:grid-cols-2 mx-auto">
                <Partner name="SaltySimulations" path="https://sim4flight.com/salty/">
                    <PartnerImage className="w-2/3 mx-auto" src="img/partners/salty.svg" />
                </Partner>
                <Partner name="sim4flight" path="https://sim4flight.com/">
                    <PartnerImage className="mx-auto" src="img/partners/s4f.png" />
                </Partner>
            </div>
        </section>
    );
}
