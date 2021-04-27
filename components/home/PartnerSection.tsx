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
        <img className="h-full w-full object-contain transform hover:scale-105 transition-transform duration-100" src={props.src} alt="" />
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
        <section className="relative w-full sm:py-20 lg:py-8">
            <div className="h-full grid md:grid-cols-1 lg:grid-cols-5 items-center">
                <div>
                    <a href="https://flightsim.to/" target="_blank" rel="noreferrer">
                        <img className="w-1/2 mx-auto" src="img/partners/flightsimto.png" alt="Flightsim.to" />
                    </a>
                </div>
                <div className="sm:mt-16 lg:mt-0">
                    <a href="https://fsnews.eu/" target="_blank" rel="noreferrer">
                        <img className="w-1/2 mx-auto" src="img/partners/fsnews.png" alt="FSNews" />
                    </a>
                </div>
                <div className="sm:mt-16 lg:mt-0">
                    <a href="https://github.com/Sequal32/yourcontrols" target="_blank" rel="noreferrer">
                        <img className="w-1/2 mx-auto" src="img/partners/yourcontrols.png" alt="YourControls" />
                    </a>
                </div>
                <div className="sm:mt-16 lg:mt-0">
                    <a className="flex items-center" href="https://sim4flight.com/salty/" target="_blank" rel="noreferrer">
                        <img className="w-1/12 ml-auto" src="img/partners/salty.svg" alt="Salty Simulations" />
                        <p className="font-bold lg:text-xl sm:text-6xl pl-2 mr-auto">Salty Simulations</p>
                    </a>
                </div>
                <div className="sm:mt-16 lg:mt-0">
                    <a className="flex items-center" href="https://sim4flight.com/" target="_blank" rel="noreferrer">
                        <img className="w-1/12 ml-auto" src="img/partners/s4f.png" alt="Sim4flight" />
                        <p className="font-bold lg:text-xl sm:text-6xl pl-2 mr-auto">Sim4flight</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
