import React from 'react';
import BackgroundImage from '../../../assets/img/discord.jpg';
import A32nxWireframe from '../../../assets/svg/a32nx_wireframe.svg';
import { Button } from '../../Button';

export const Hero: React.FC = () => (
    <>
        <header className="absolute max-w-7xl mx-auto px-page inset-x-2 inset-y-1/3 z-30">
            <div className="flex flex-row justify-between items-end">
                <div>
                    <h2 className="text-2xl font-medium tracking-widest text-white uppercase ml-2 mb-2">
                        DISCOVER THE
                    </h2>
                    <h1 className="text-7xl sm:text-8xl font-medium">
                        <span className="text-blue-light">A32</span>
                        <span className="text-blue">N</span>
                        X
                    </h1>
                    <h1 className="w-2/3 text-xl mt-2">
                        &quot;The potential within the A32NX project is extremely promising and its future is bright in the task of bringing the aircraft to a level of high fidelity.&quot;
                    </h1>
                    <p className="mt-4 text-gray-200 text-xl">
                        - Dan, Real Airbus A320 Pilot
                    </p>
                    <div className="flex max-w-md py-5">

                        <a href="https://api.flybywiresim.com/installer">
                            <Button
                                className="w-40 text-xl font-bold bg-blue-light border-2 border-blue-light transition hover:bg-white hover:text-blue-light mr-3"
                            >
                                Installer
                            </Button>
                        </a>

                        <a href="#download">
                            <Button
                                className="w-40 text-xl font-bold border-2 border-blue-light text-blue-light transition hover:bg-white hover:text-blue-light"
                            >
                                Download
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <img draggable="false" className="absolute hidden lg:block -right-1/3 transform scale-150 opacity-30 select-none" src={A32nxWireframe} alt="" />
        <img draggable="false" className="relative z-0 h-screen object-cover w-screen opacity-30 select-none" src={BackgroundImage} alt="" />
    </>
);
