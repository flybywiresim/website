import React, { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faFacebook, faGithub, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

type IconItemProp = {
    icon: IconProp,
    href?: string
}

export const FooterIconItem: React.FC<IconItemProp> = (props: PropsWithChildren<IconItemProp>) => {
    return(
        <a href={props.href} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="mx-2" icon={props.icon} size="lg" />
        </a>
    );
};

export function Footer(): JSX.Element {
    return (
        <div className="bg-blue-dark w-full px-10 py-8">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col">
                    <div className="flex flex-col-3 py-4 text-lg mx-auto">
                        <FooterIconItem icon={faTwitter} href="https://twitter.com/FlyByWireSim" />
                        <FooterIconItem icon={faFacebook} href="https://www.facebook.com/FlyByWireSimulations" />
                        <FooterIconItem icon={faDiscord} href="https://discord.gg/flybywire" />
                        <FooterIconItem icon={faTwitch} href="https://www.twitch.tv/flybywiresimulations" />
                        <FooterIconItem icon={faYoutube} href="https://www.youtube.com/c/FlyByWireSimulations" />
                        <FooterIconItem icon={faGithub} href="https://github.com/flybywiresim" />
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
