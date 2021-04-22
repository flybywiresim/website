import React from 'react';
import { BoxCard, BoxImage, BoxBody } from '../utils/BoxCard';

export function PartnerSection(): JSX.Element {
    return (
        <section className="relative w-full px-10 py-14">
            <div className="w-1/2 2xl:w-1/4 text-center mx-auto divide-y divide-gray-400">
                <h2 className="text-base font-semibold tracking-wider text-blue-200 uppercase">OUR AFFILIATED</h2>
                <p className="mt-3 pt-3 text-5xl font-extrabold text-blue-light">
                    Partners
                </p>
            </div>
            <div className="flex flex-row mt-6 mx-auto justify-center items-center gap-x-8 max-w-6xl">
                <BoxCard>
                    <BoxImage className="w-32" src="img/partners/s4f.png" alt="Sim4flight" />
                    <BoxBody>
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Sim4Flight</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate.
                        </p>
                    </BoxBody>
                </BoxCard>
                <BoxCard>
                    <BoxImage className="w-60 pt-16 pb-3" src="img/partners/flightsimto.png" alt="flightsimto" />
                    <BoxBody>
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Flightsim.to</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate. tempora voluptate
                        </p>
                    </BoxBody>
                </BoxCard>
                <BoxCard>
                    <BoxImage className="w-60 pt-14 " src="img/partners/fsnews.png" alt="fsnews" />
                    <BoxBody>
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">FSNews</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate.
                        </p>
                    </BoxBody>
                </BoxCard>
            </div>
            <div className="flex flex-row mt-6 mx-auto justify-center items-center gap-x-8 max-w-6xl">
                <BoxCard>
                    <BoxImage className="w-32" src="img/partners/s4f.png" alt="Sim4flight" />
                    <BoxBody>
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Bruh</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate.
                        </p>
                    </BoxBody>
                </BoxCard>
                <BoxCard>
                    <BoxImage className="w-32" src="img/partners/s4f.png" alt="Sim4flight" />
                    <BoxBody>
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Bruh</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate. tempora voluptate
                        </p>
                    </BoxBody>
                </BoxCard>
                <BoxCard>
                    <BoxImage className="w-32" src="img/partners/s4f.png" alt="Sim4flight" />
                    <BoxBody>
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Bruh</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor dolorem dolores
                            est excepturi exercitationem hic id iste molestias nobis nostrum odio optio perspiciatis
                            placeat reprehenderit, sunt tempora voluptate.
                        </p>
                    </BoxBody>
                </BoxCard>
            </div>
        </section>
    );
}
