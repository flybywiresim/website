import Image from 'next/dist/client/future/image';
import { ReactNode } from 'react';
import Container from '../Utils/Container';
import Section from '../Utils/Section';

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
            <p>{props.label}</p>
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
                            <p className="font-semibold">contact@flybywiresim.com</p>
                        </div>

                        <div className="grid grid-cols-3 items-start gap-x-8 gap-y-5">
                            <NavWrapper label="Projects">
                                <NavItem label="Installer" href="/" />
                                <NavItem label="A32NX" href="/" />
                                <NavItem label="A380X" href="/" />
                                <NavItem label="EFB" href="/" />
                            </NavWrapper>

                            <NavWrapper label="Menu">
                                <NavItem label="NOTAMs" href="/" />
                                <NavItem label="Projects" href="/" />
                                <NavItem label="Docs" href="/" />
                                <NavItem label="Map" href="/" />
                            </NavWrapper>

                            <NavWrapper label="Socials">
                                <NavItem label="Discord" href="/" />
                                <NavItem label="Twitter" href="/" />
                                <NavItem label="Facebook" href="/" />
                                <NavItem label="YouTube" href="/" />
                                <NavItem label="Twitch" href="/" />
                            </NavWrapper>
                        </div>
                    </div>

                    <div className="top-4 grid justify-center gap-4 py-8 text-center lg:grid-cols-2 lg:text-left">
                        <span className="flex gap-8 underline underline-offset-4">
                            <a href="https://github.com/flybywiresim/manuals/blob/master/pdf/FBW%20Terms%20of%20Services.pdf" target="_blank" rel="noreferrer">Terms of Use</a>
                            <a href="https://github.com/flybywiresim/manuals/blob/master/pdf/FBW%20Privacy%20Policy.pdf" target="_blank" rel="noreferrer">Privacy Policy</a>
                            <a href="https://github.com/flybywiresim/" target="_blank" rel="noreferrer">Source Code</a>
                        </span>

                        <a href="https://vercel.com" className="flex justify-center gap-1 text-dark/50 lg:justify-end">
                            Powered by
                            <Image src="/svg/vercel.svg" alt="Vercel" width={50} height={50} />
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
