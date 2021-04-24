import React from 'react';
import { BoxCard, BoxImage, BoxBody } from '../utils/BoxCard';

export function PartnerSection(): JSX.Element {
    return (
        <section className="relative overflow-hidden w-full px-10 py-14">
            <div className="w-1/2 2xl:w-1/4 text-center mx-auto divide-y divide-gray-400">
                <h2 className="text-base font-semibold tracking-wider text-blue-200 uppercase">OUR AFFILIATED</h2>
                <p className="mt-3 pt-3 text-5xl font-extrabold text-blue-light">
                    Partners
                </p>
            </div>
            <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-3 gap-y-10 mt-10 mx-auto justify-center items-center gap-x-8 max-w-6xl">
                <BoxCard>
                    <BoxImage className="w-60 pt-16 pb-3" src="img/partners/flightsimto.png" alt="Flightsim.to" />
                    <BoxBody linkText="Learn More" path="https://flightsim.to/">
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Flightsim.to</h1>
                        <p>
                            Flightsim.to is the largest free addon marketplace for Microsoft Flight Simulator.
                            They host a large abbundance of airplane addons, liveries, regional sceneries and more!
                            Anyone is welcome to contribute their own works for everyone to enjoy.
                        </p>
                    </BoxBody>
                </BoxCard>
                <BoxCard>
                    <BoxImage className="w-60 pt-14" src="img/partners/fsnews.png" alt="FSNews" />
                    <BoxBody linkText="Learn More" path="https://fsnews.eu/">
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">FSNews</h1>
                        <p>
                            FSNews brings together the latest flight simulation news regarding new addons for many
                            different flight simulators along with updates from developers. Stay tuned for updates
                            from the flybywire developers in their "The Workshop" series.
                        </p>
                    </BoxBody>
                </BoxCard>
                <BoxCard>
                    <BoxImage className="w-60 pt-16 pb-5" src="img/partners/yourcontrols.png" alt="YourControls" />
                    <BoxBody linkText="Learn More" path="https://github.com/Sequal32/yourcontrols">
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">YourControls</h1>
                        <p>
                            YourControls is an open-source project that allows users to fly their aircraft in
                            Microsoft Flight Simulator with other users. This means that you can now have a co-pilot
                            fly with you as well as any other spectators you invite to join your session.
                        </p>
                    </BoxBody>
                </BoxCard>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-10 md:mt-8 mx-auto justify-center items-center gap-x-8 max-w-6xl">
                <BoxCard>
                    <BoxImage className="w-20 pt-1 hover:scale-75" src="img/partners/salty.svg" alt="Salty Simulations" />
                    <BoxBody linkText="Learn More" path="https://sim4flight.com/salty/">
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Salty Simulations</h1>
                        <p>
                            Salty Simulations is the group that created the open-source Salty Simulations 747 improvement project.
                            Much like flybywire, they have created a large amount of additional functionality for the default 747
                            like an improved flight model, fuel consumption improvements, and new FMC pages.
                        </p>
                    </BoxBody>
                </BoxCard>
                <BoxCard>
                    <BoxImage className="w-32" src="img/partners/s4f.png" alt="Sim4flight" />
                    <BoxBody linkText="Learn More" path="https://sim4flight.com/">
                        <h1 className="text-center text-blue-light font-bold text-2xl mt-3 mb-3">Sim4Flight</h1>
                        <p>
                            Sim4Flight works to create and provide aircraft liveries and enhancements for Microsoft Flight Simulator,
                            Prepar3D, and X-Plane. In addition, Sim4Flight is currently working on bringing a functional Airbus A350 to market
                            for the new Microsoft Flight Simulator and provide developer updates to keep you in the know.
                        </p>
                    </BoxBody>
                </BoxCard>
            </div>
        </section>
    );
}
