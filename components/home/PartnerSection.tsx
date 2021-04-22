import React from 'react';
import { BoxCard, BoxImage, BoxBody } from '../utils/BoxCard';

export function PartnerSection(): JSX.Element {
    return (
        <section className="relative overflow-hidden w-full px-10 py-14">
            <img className="absolute h-384 -mt-20 -mx-12 w-full opacity-5" src="img/prev.jpg" />
            <div className="w-1/2 2xl:w-1/4 text-center mx-auto divide-y divide-gray-400">
                <h2 className="text-base font-semibold tracking-wider text-blue-200 uppercase">OUR AFFILIATED</h2>
                <p className="mt-3 pt-3 text-5xl font-extrabold text-blue-light">
                    Partners
                </p>
            </div>
            <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-3 gap-y-10 mt-10 mx-auto justify-center items-center gap-x-8 max-w-6xl">
                <BoxCard>
                    <BoxImage className="w-60 pt-16 pb-3" src="img/partners/flightsimto.png" alt="Flightsim.to" />
                    <BoxBody path="https://flightsim.to/">
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Flightsim.to</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate. tempora voluptate
                        </p>
                    </BoxBody>
                </BoxCard>
                <BoxCard>
                    <BoxImage className="w-60 pt-14" src="img/partners/fsnews.png" alt="FSNews" />
                    <BoxBody path="https://fsnews.eu/">
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">FSNews</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate.
                        </p>
                    </BoxBody>
                </BoxCard>
                <BoxCard>
                    <BoxImage className="w-60 pt-16 pb-5" src="img/partners/yourcontrols.png" alt="YourControls" />
                    <BoxBody path="https://github.com/Sequal32/yourcontrols">
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">YourControls</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate.
                        </p>
                    </BoxBody>
                </BoxCard>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-10 sm:mt-10 md:mt-8 mx-auto justify-center items-center gap-x-8 max-w-6xl">
                <BoxCard>
                    <BoxImage className="w-20 pt-1 hover:scale-75" src="img/partners/salty.svg" alt="Salty Simulations" />
                    <BoxBody path="https://sim4flight.com/salty/">
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Salty Simulations</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate.
                        </p>
                    </BoxBody>
                </BoxCard>
                <BoxCard>
                    <BoxImage className="w-32" src="img/partners/s4f.png" alt="Sim4flight" />
                    <BoxBody path="https://sim4flight.com/">
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Sim4Flight</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate. tempora voluptate
                        </p>
                    </BoxBody>
                </BoxCard>
            </div>
        </section>
    );
}
