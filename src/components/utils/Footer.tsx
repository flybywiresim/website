import { FC, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faFacebook, faGithub, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

type IconItemProp = {
    icon: IconProp,
    href?: string
}

export const FooterIconItem: FC<IconItemProp> = (props: PropsWithChildren<IconItemProp>) => (
    <a href={props.href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="mx-2 hover:text-blue-light duration-100" icon={props.icon} size="lg" />
    </a>
);

export const Footer = (): JSX.Element => (
    <footer className="relative bg-blue-dark w-full px-10 py-8 z-30">
        <div className="flex flex-row justify-center">
            <div className="flex flex-col">
                <div className="flex flex-col-3 py-4 text-lg mx-auto">
                    <FooterIconItem icon={faGithub} href="https://github.com/flybywiresim" />
                    <FooterIconItem icon={faTwitter} href="https://twitter.com/FlyByWireSim" />
                    <FooterIconItem icon={faFacebook} href="https://www.facebook.com/FlyByWireSimulations" />
                    <FooterIconItem icon={faDiscord} href="https://discord.gg/flybywire" />
                    <FooterIconItem icon={faTwitch} href="https://www.twitch.tv/flybywiresimulations" />
                    <FooterIconItem icon={faYoutube} href="https://www.youtube.com/c/FlyByWireSimulations" />
                </div>
                <div className="text-center">
                    <div className="flex flex-row justify-center mx-auto space-x-8">
                        <a
                            className="hover:underline"
                            href="https://github.com/flybywiresim/flybywiresim-website/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p>Source Code</p>
                        </a>
                        <div className="hover:underline cursor-pointer">
                            <Link href="/tos">
                                <p>Terms of Service</p>
                            </Link>
                        </div>
                        <div className="hover:underline cursor-pointer">
                            <Link href="/privacy">
                                <p>Privacy Policy</p>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-2">
                        <a
                            className="flex justify-center"
                            href="https://vercel.com/?utm_source=flybywiresim&utm_campaign=oss"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Powered by
                            <div className="mx-2">
                                <Image src="/svg/vercel.svg" alt="Vercel" width={60} height={20} />
                            </div>
                        </a>
                    </div>

                    <p className="text-gray-400 pt-2">&copy; FlyByWire Simulations and its contributors 2020-2021</p>
                </div>
            </div>
        </div>
    </footer>
);
