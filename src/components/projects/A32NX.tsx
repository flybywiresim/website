import React from 'react';
import BackgroundImage from '../../assets/img/discord.jpg';

export const A32NX: React.FC = () => (
    <section>
        <div className="absolute max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 inset-x-2 inset-y-1/3 z-30">
            <div className="flex flex-row justify-between items-end">
                <div>
                    <h2 className="text-xl font-medium tracking-widest text-white uppercase ml-2 mb-2">
                    DISCOVER THE
                    </h2>
                    <h1 className="text-7xl sm:text-8xl font-medium">
                        <span className="text-blue-light">A32</span><span className="text-blue">N</span>X
                    </h1>
                    <h1 className="w-2/3 text-2xl mt-2">
                        &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsa optio recusandae. Dolores, recusandae sit?&quot;
                    </h1>
                </div>
            </div>
        </div>
        <img className="relative z-0 h-screen object-cover w-screen opacity-20"
            src={BackgroundImage}  alt=""/>
    </section>
);
