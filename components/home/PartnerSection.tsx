import React, { PropsWithChildren } from 'react';

type ImageProps = {
    className?: string,
    imgClassName?: string,
    src: string
};

type PartnerProps = Partial<{
    className?: string,
    aTagClassName?: string,
    name?: string,
    path?: string
}>;

export const PartnerImage: React.FC<ImageProps> = (props: PropsWithChildren<ImageProps>) => (
    <div className={props.className}>
        <img className={props.imgClassName} src={props.src} alt="" />
    </div>
);

export const Partner: React.FC<PartnerProps> = (props: PropsWithChildren<PartnerProps>) => (
    <div id={props.name} className={`flex flex-col justify-center transform hover:scale-105 transition-transform duration-200 ${props.className}`}>
        <a className={props.aTagClassName} href={props.path} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    </div>
);

export function PartnerSection(): JSX.Element {
    return (
        <section className="w-full sm:py-20 lg:py-8 ">
            <div className="grid md:grid-cols-1 lg:grid-cols-5 sm:space-y-16 lg:space-y-0 items-center">
                <Partner name="Flightsim.to" path="https://flightsim.to/">
                    <PartnerImage className="w-1/2 mx-auto" src="img/partners/flightsimto.png" />
                </Partner>
                <Partner name="FSNews" path="https://fsnews.eu/">
                    <PartnerImage className="w-1/2 mx-auto" src="img/partners/fsnews.png" />
                </Partner>
                <Partner name="YourControls" path="https://github.com/Sequal32/yourcontrols">
                    <PartnerImage className="w-1/2 mx-auto" src="img/partners/yourcontrols.png" />
                </Partner>
                <Partner aTagClassName="flex items-center" name="SaltySimulations" path="https://sim4flight.com/salty/">
                    <PartnerImage className="w-1/12 ml-auto" src="img/partners/salty.svg" />
                    <p className="font-bold lg:text-2xl sm:text-6xl pl-2 mr-auto">Salty Simulations</p>
                </Partner>
                <Partner aTagClassName="flex items-center" name="sim4flight" path="https://sim4flight.com/">
                    <PartnerImage className="w-1/12 ml-auto" src="img/partners/s4f.png" />
                    <p className="font-bold lg:text-2xl sm:text-6xl pl-2 mr-auto">Sim4flight</p>
                </Partner>
            </div>
        </section>
    );
}
