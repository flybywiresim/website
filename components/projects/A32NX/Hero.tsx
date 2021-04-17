import React from 'react';
import { Button } from '../../utils/Button';
import ReactPlayer from 'react-player/youtube'
import Popup from 'reactjs-popup';

const arrowStyle = { color: 'transparent' };
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };


export const Hero: React.FC = () => (
    <>
        <header className="absolute max-w-7xl mx-auto px-page inset-x-2 inset-y-1/3 z-30">
            <div className="flex flex-row justify-between items-end">

                <div>                    
                    
                    

                    <h2 className="text-2xl font-medium tracking-widest text-white uppercase ml-2 mb-2">

                <div>
                    <h2 className="text-2xl font-medium tracking-widest uppercase ml-2 mb-2">

                        DISCOVER THE
                    </h2>
                    <h1 className="text-7xl sm:text-8xl font-medium">
                            <span className="text-blue-light">A32</span>
                            <span className="text-blue">N</span>
                            X

                        </h1>
                    

                    <div className="flex max-w-md py-5">
                    
                        <a href="#features">
                            <Button
                                className="transition duration-500 ease-in-out w-40 text-xl font-bold bg-blue-light hover:bg-white hover:text-blue-light mr-3"
                            >
                                Features
                            </Button>
                        </a>

                        <a href="#download">
                            <Button
                                className="transition duration-500 ease-in-out w-40 text-xl font-bold bg-blue-light hover:bg-white hover:text-blue-light mr-3"
                            >
                                Download
                            </Button>
                            </a>

                    </div>

                    <a>
                            <Button
                                className="flex flex-row items-center transition duration-500 ease-in-out w-80 text-xl font-bold bg-blue-light hover:bg-white hover:text-blue-light mr-3"
                            >
                                <Popup
                                        trigger={<button className="button"> Watch The V0.0.6 Stable Trailer </button>} position="right center"
                                        {...{arrowStyle, overlayStyle}}
                                    >
                                        <span>   
                                                <h1 className="text-xl max-w-prose space-x-40">
                                                <span className="max-w-prose"></span>
                                                <ReactPlayer muted={true} controls={true} url='https://www.youtube.com/watch?v=YH0iAGiXkHE&ab_channel=FlyByWireSimulations' />
                                                </h1>  
                                        </span>
                                </Popup>

                            </Button>
                    </a>

                </div>
            </div>
        </header>
        <img draggable="false" className="relative z-0 h-screen object-cover w-screen opacity-30 select-none" src="img/a32nxbg.png" alt="" />
    </>
);
