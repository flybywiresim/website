import Image from 'next/legacy/image';
import { ReactNode } from 'react';
import Container from '../Utils/Container';
import Section from '../Utils/Section';
import { links } from '../../constants/links';

const NavWrapper = (props: { label: string, children: ReactNode }) => (
    <div className="grid">
        <p className="text-dark/75">{props.label}</p>
        <ul>
            {props.children}
        </ul>
    </div>
);

const NavItem = (props: {label: string, href: string}) => (
    <li>
        <a href={props.href}>
            <p className="hover:font-medium hover:underline min-w-24">{props.label}</p>
        </a>
    </li>
);

const Footer = () => (
    <footer>
        <Section theme="light" className="pb-0">
            <Container>
                <div className="text-md justify-center py-4">
                    <div className="flex flex-col justify-between lg:flex-row">
                        <div className="my-4">
                            <div className="lg:mb-4">
                                <Image src="/svg/tail/tail.svg" alt="FlyByWire Simulations Logo" width={50} height={50} />
                            </div>
                            <h4>Contact Us</h4>
                            <a href="mailto:contact@flybywiresim.com">
                                <p className="font-semibold">contact@flybywiresim.com</p>
                            </a>
                        </div>

                        <div className="grid grid-cols-3 items-start gap-x-32 gap-y-5">
                            <NavWrapper label="Projects">
                                <NavItem label="Installer" href={links.installer} />
                                <NavItem label="A32NX" href="/projects/a32nx" />
                                <NavItem label="A380X" href="/projects/a380x" />
                                <NavItem label="EFB" href={links.efb} />
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
                                <NavItem label="Facebook" href={links.facebook} />
                                <NavItem label="YouTube" href={links.youtube} />
                                <NavItem label="Twitch" href={links.twitch} />
                                <NavItem label="Press Kit" href={links.pressKit} />
                            </NavWrapper>
                        </div>
                    </div>

                    <div className="top-4 grid items-center justify-center gap-4 py-8 text-center lg:grid-cols-2 lg:text-left">
                        <span className="flex gap-8 underline underline-offset-4">
                            <a href="https://github.com/flybywiresim/manuals/blob/master/pdf/FBW%20Terms%20of%20Services.pdf" target="_blank" rel="noreferrer">Terms of Use</a>
                            <a href="https://github.com/flybywiresim/manuals/blob/master/pdf/FBW%20Privacy%20Policy.pdf" target="_blank" rel="noreferrer">Privacy Policy</a>
                            <a href="https://github.com/flybywiresim/" target="_blank" rel="noreferrer">Source Code</a>
                        </span>

                        <a href="https://pages.cloudflare.com/" className="flex items-center justify-center gap-1 text-dark/50 lg:justify-end">
                            <span className="mb-1 mr-1">Runs on Cloudflare®</span>
                            <Image src="/img/cloudflare-logo.png" alt="CloudFlare" width={146} height={50} />
                        </a>

                        <p className=" text-sm text-dark/50">
                            &copy; FlyByWire Simulations and its contributors 2020-
                            {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    </footer>
);

export default Footer;
