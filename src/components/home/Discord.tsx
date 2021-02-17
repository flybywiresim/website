import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BackgroundImage from '../../assets/img/discord.jpg';
import { Button } from '../Button';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export const Discord: React.FC = () => {
    return (
        <section className="h-144 sm:h-120 bg-navy-800 flex items-center">
            <div className="absolute z-20 w-full flex">
                <div className="relative mx-auto text-center sm:flex sm:divide-x justify-center sm:space-x-10">
                    <FontAwesomeIcon className="self-center mb-3 sm:mb-0" icon={faDiscord} size="9x"/>

                    <div className="sm:space-x-10 text-center mx-auto sm:text-left w-1/2">
                        <div className="lg:w-1/5 divide-y divide-gray-400 sm:ml-10 space-y-2">
                            <p className="font-medium tracking-widest text-white uppercase ml-1">JOIN US ON</p>
                            <h2 className="text-5xl pt-2.5 text-discord font-bold">Discord</h2>
                        </div>
                        <p className="text-xl mt-3 justify-center">
                            Join our partnered community server with over 20,000 members to meet new people and share your interests.
                        </p>
                        <div className="mt-6 flex justify-center sm:justify-start">
                            <a href="https://opencollective.com/flybywire/" target="_blank" rel="noreferrer">
                                <Button className="w-60 text-xl text-white font-bold bg-discord border-2 border-discord transition hover:bg-white hover:text-discord">Join the Community</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <img className="relative z-0 h-144 sm:h-120 object-cover w-screen opacity-20"
                src={BackgroundImage}  alt=""/>
        </section>
    );
};
