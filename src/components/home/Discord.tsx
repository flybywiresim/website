import React from 'react';

import BackgroundImage from '../../assets/img/discord.jpg';
import { Button } from '../Button';

export const Discord: React.FC = () => {
    return (
        <section className="h-120 bg-navy-800 text-white flex flex-row items-center">
            <div className="absolute w-full z-10 flex flex-row justify-center">
                <div className="w-3/4 xl:w-2/3 flex flex-col text-center xl:text-left">
                    <div>
                        <div className="text-left divide-y divide-gray-500 w-1/3 2xl:w-36">
                            <h2 className="text-base font-medium tracking-widest text-white uppercase">JOIN US ON</h2>
                            <p className="mt-3 pt-3 text-5xl text-discord font-bold">
                                Discord
                            </p>
                        </div>

                        <p className="xl:w-2/3 text-xl mt-6">
                            Contributions allow FlyByWire Simulations to provide better services for our users, such as fast and reliable download networks and integrated online features to enrich your flight simulation experience.
                            We use Open Collective to transparently manage our donations and expenses, which means you can see how we utilize donated funds at any time.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-col-reverse xl:flex-row items-center">
                        <a href="https://opencollective.com/flybywire/" target="_blank" rel="noreferrer">
                            <Button className="w-60 text-xl text-white font-bold bg-discord border-2 border-discord transition hover:bg-white hover:text-discord">Join the Community</Button>
                        </a>
                    </div>
                </div>
            </div>

            <img className="relative z-0 h-120 object-cover w-screen opacity-30"
                src={BackgroundImage} />
        </section>
    );
};
