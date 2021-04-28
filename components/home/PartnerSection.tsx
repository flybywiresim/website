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
    <div className={`mx-auto ${props.className}`}>
        <img src={props.src} alt="" />
    </div>
);

export const Partner: React.FC<PartnerProps> = (props: PropsWithChildren<PartnerProps>) => (
    <div id={props.name} className={`flex flex-col justify-center ${props.className}`}>
        <a href={props.path} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    </div>
);

export function PartnerSection(): JSX.Element {
    return (
        <section className="w-full py-20 lg:py-8">
            <div className="max-w-screen-2xl grid md:grid-cols-1 lg:grid-cols-5 space-y-16 lg:space-y-0 items-center mx-auto">
                <Partner name="Flightsim.to" path="https://flightsim.to/">
                    <PartnerImage className="w-1/2" src="img/partners/flightsimto.png" />
                </Partner>
                <Partner name="FSNews" path="https://fsnews.eu/">
                    <PartnerImage className="w-1/2" src="img/partners/fsnews.png" />
                </Partner>
                <Partner name="YourControls" path="https://github.com/Sequal32/yourcontrols">
                    <PartnerImage className="w-1/2" src="img/partners/yourcontrols.png" />
                </Partner>
                <Partner name="SaltySimulations" path="https://sim4flight.com/salty/">
                    <PartnerImage className="w-3/5" src="img/partners/salty.svg" />
                </Partner>
                <Partner name="sim4flight" path="https://sim4flight.com/">
                    <PartnerImage className="w-1/2" src="img/partners/s4f.png" />
                </Partner>
            </div>
        </section>
    );
}
