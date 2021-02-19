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
            <FontAwesomeIcon className="mx-2 hover:text-blue-light duration-100" icon={props.icon} size="lg" />
        </a>
    );
};

export const Footer = (): JSX.Element => (
    <div className="bg-blue-dark w-full px-10 py-8">
        <div className="flex flex-row justify-center">
            <div className="flex flex-col">
                <div className="flex flex-col-3 py-4 text-lg mx-auto">
                    <FooterIconItem icon={faGithub} href="https://github.com/flybywiresim"/>
                    <FooterIconItem icon={faTwitter} href="https://twitter.com/FlyByWireSim"/>
                    <FooterIconItem icon={faFacebook} href="https://www.facebook.com/FlyByWireSimulations"/>
                    <FooterIconItem icon={faDiscord} href="https://discord.gg/flybywire"/>
                    <FooterIconItem icon={faTwitch} href="https://www.twitch.tv/flybywiresimulations"/>
                    <FooterIconItem icon={faYoutube} href="https://www.youtube.com/c/FlyByWireSimulations"/>
                </div>
                <div className="text-center">
                    <div className="flex flex-row justify-center mx-auto space-x-8">
                        <a className="hover:underline"
                            href="https://github.com/flybywiresim/flybywiresim-website/"
                            target="_blank" rel="noreferrer">
                            <p>Source Code</p>
                        </a>
                        <a className="hover:underline"
                            href="https://github.com/flybywiresim/manuals/raw/master/pdf/Terms%20of%20Service.pdf"
                            target="_blank" rel="noreferrer">
                            <p>Terms of Service</p>
                        </a>
                        <a className="hover:underline"
                            href="https://github.com/flybywiresim/manuals/raw/master/pdf/Privacy%20Policy.pdf"
                            target="_blank" rel="noreferrer">
                            <p>Privacy Policy</p>
                        </a>
                    </div>
                    <p className="text-gray-400 pt-2">&copy; FlyByWire Simulations and its contributors 2020-2021</p>
                    <p className="text-sm text-gray-400 pt-2">v2.0</p>
                </div>
            </div>
        </div>
    </div>
);
