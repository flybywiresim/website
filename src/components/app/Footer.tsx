import React from 'react';
import { faTwitter, faFacebook, faDiscord, faTwitch, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Footer(): JSX.Element {
    return (
        <div className="bg-blue-dark w-full m-auto px-10 py-8">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col">
                    <div className="flex flex-col-3 py-4 text-lg mx-auto">
                        <a href="https://twitter.com/FlyByWireSim"><FontAwesomeIcon className="mx-2" icon={ faTwitter } size="lg" /></a>
                        <a href="https://www.facebook.com/FlyByWireSimulations"><FontAwesomeIcon className="mx-2" icon={ faFacebook } size="lg" /></a>
                        <a href="https://discord.gg/flybywire"><FontAwesomeIcon className="mx-2" icon={ faDiscord } size="lg" /></a>
                        <a href="https://www.twitch.tv/flybywiresimulations"><FontAwesomeIcon className="mx-2" icon={ faTwitch } size="lg" /></a>
                        <a href="https://www.youtube.com/c/FlyByWireSimulations"><FontAwesomeIcon className="mx-2" icon={ faYoutube } size="lg" /></a>
                        <a href="https://github.com/flybywiresim"><FontAwesomeIcon className="mx-2" icon={ faGithub } size="lg" /></a>
                    </div>
                    <div className="text-center">
                        <div className="grid grid-cols-2 w-full sm:w-3/4 mx-auto">
                            <a href="https://github.com/flybywiresim/manuals/blob/master/pdf/Terms%20of%20Service.pdf" target="_blank" rel="noreferrer">
                                <p>Terms of Service</p>
                            </a>
                            <a href="https://github.com/flybywiresim/manuals/blob/master/pdf/Privacy%20Policy.pdf" target="_blank" rel="noreferrer">
                                <p>Privacy Policy</p>
                            </a>
                        </div>
                        <p className="text-gray-400 py-2">&copy; FlyByWire Simulations 2021. All rights reserved.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
