import React from 'react';
import BackgroundImage from '../../../assets/img/Overhead.jpg';

import { Button } from '../../Button';

export const Hero: React.FC = () => (
    <>
        <header className="absolute max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 inset-x-2 inset-y-1/3 z-30">
            <div className="flex flex-row justify-between items-end">
                <div>
                    <h2 className="text-2xl font-medium tracking-widest text-white uppercase ml-2 mb-2">
                        A FIRST LOOK AT THE
                    </h2>
                    <h1 className="text-7xl sm:text-8xl font-medium">
                        <span className="text-blue-light">A38</span>
                        <span className="text-blue">0</span>
                        X
                    </h1>
                    <h1 className="w-2/3 text-xl mt-2">
                        One of our most ambitious projects yet, powered and led by the same community effort as always.
                    </h1>
                    <div className="flex max-w-md py-5">

                        <a href="#showcase">
                            <Button
                                className="w-80 text-xl font-bold bg-blue-light border-2 border-blue-light transition hover:bg-white hover:text-blue-light mr-3"
                            >
                                View our progress
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <img draggable="false" className="relative z-0 h-screen object-cover w-screen opacity-30 select-none" src={BackgroundImage} alt="" />
    </>
);
