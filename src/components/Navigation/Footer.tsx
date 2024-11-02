import Image from 'next/legacy/image';
import { ReactNode } from 'react';
import { links } from '../../constants/links';
import Container from '../Utils/Container';
import Section from '../Utils/Section';

const NavWrapper = (props: { label: string, children: ReactNode }) => (
    <div className="grid">
        <p className="text-dark/75 dark:text-cyan transition-colors">{props.label}</p>
        <ul>
            {props.children}
        </ul>
    </div>
);

const NavItem = (props: { label: string, href: string }) => (
    <li>
        <a href={props.href}>
            <p className="hover:font-medium hover:underline min-w-24 transition-all ease-in-out">
                {props.label}
            </p>
        </a>
    </li>
);

const Footer = () => (
    <footer>
        <Section theme="light" className="pb-0 dark:bg-navy-dark dark:text-light transition-colors">
            <Container>
                <div className="text-md justify-center py-4">
                    <div className="flex flex-col justify-between lg:flex-row">
                        <div className="my-4">
                            <div className="lg:mb-4">
                                <Image
                                    src="/svg/tail/tail.svg"
                                    alt="FlyByWire Simulations Logo"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <h4>Contact Us</h4>
                            <a href="mailto:contact@flybywiresim.com">
                                <p className="font-semibold">
                                    contact@flybywiresim.com
                                </p>
                            </a>
                        </div>

                        <div className="grid grid-cols-3 items-start gap-x-32 gap-y-5">
                            <NavWrapper label="Projects">
                                <NavItem label="Installer" href="/" />
                                <NavItem
                                    label="A32NX"
                                    href="/projects/downloadLinks"
                                />
                                <NavItem label="A380X" href="/projects/a380x" />
                                <NavItem label="EFB" href="/" />
                            </NavWrapper>

                            <NavWrapper label="Menu">
                                <NavItem label="NOTAMs" href="/notams" />
                                <NavItem label="Projects" href="/projects" />
                                <NavItem label="Docs" href={links.docs} />
                                <NavItem label="Map" href="/map" />
                                <NavItem label="FAQ" href={links.docsfaq} />
                            </NavWrapper>

                            <NavWrapper label="Socials">
                                <NavItem label="Discord" href={links.discord} />
                                <NavItem label="Twitter" href={links.twitter} />
                                <NavItem
                                    label="Facebook"
                                    href={links.facebook}
                                />
                                <NavItem label="YouTube" href={links.youtube} />
                                <NavItem label="Twitch" href={links.twitch} />
                            </NavWrapper>
                        </div>
                    </div>

                    <div className="top-4 grid items-center justify-center gap-4 py-8 text-center lg:grid-cols-2 lg:text-left">
                        <span className="flex gap-8 underline underline-offset-4">
                            <a
                                href="https://github.com/flybywiresim/manuals/blob/master/pdf/FBW%20Terms%20of%20Services.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Terms of Use
                            </a>
                            <a
                                href="https://github.com/flybywiresim/manuals/blob/master/pdf/FBW%20Privacy%20Policy.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="https://github.com/flybywiresim/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Source Code
                            </a>
                        </span>

                        <a
                            href="https://vercel.com"
                            className="flex items-center justify-center gap-1 text-dark/50 dark:text-light lg:justify-end"
                        >
                            <span className="mb-1 mr-1">Powered by</span>
                            <picture>
                                <source
                                    srcSet="/svg/vercel-light.svg"
                                    media="(prefers-color-scheme: dark)"
                                />
                                <img
                                    src="/svg/vercel.svg"
                                    alt="Vercel"
                                    width={50}
                                    height={50}
                                />
                            </picture>
                        </a>
                        <p className="text-sm text-dark/50 dark:text-light transition-colors">
                            &copy; FlyByWire Simulations and its contributors
                            2020-
                            {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    </footer>
);

export default Footer;
