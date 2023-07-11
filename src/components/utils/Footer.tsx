import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { NavLink } from './NavLinks';

export const Footer = () => (
    <footer className="bg-white">
        <Container className="flex flex-col gap-y-10 items-stretch py-8 w-full xl:gap-y-2 xl:py-14">
            <div className="flex flex-wrap gap-x-12 gap-y-10 justify-between">
                <div className="flex flex-col items-stretch">
                    <span className="self-start">
                        <Link href="/">
                            <Image className="cursor-pointer" src="/svg/FBW-Icon.svg" width={73.54} height={68.84} />
                        </Link>
                    </span>

                    <div className="text-black">
                        <h4 className="mt-8 font-semibold opacity-70 xl:mt-20">
                            Contact Us
                        </h4>
                        <p className="font-semibold">contact@flybywiresim.com</p>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div className="flex flex-wrap gap-x-20 gap-y-10">
                        <div className="space-y-3 text-black">
                            <span className="text-xl font-medium">Project</span>
                            <NavLink name="Installer" path="/" />
                            <NavLink name="A32NX" path="/projects/a32nx" />
                            <NavLink name="A380X" path="/projects/a380x" />
                            <NavLink name="EFB" path="/projects/efb" />
                        </div>
                        <div className="space-y-3 text-black">
                            <span className="text-xl font-medium">Menu</span>
                            <NavLink name="NOTAMs" path="/" />
                            <NavLink name="Projects" path="/projects" />
                            <NavLink name="Documentation" external path="https://docs.flybywiresim.com/" />
                            <NavLink name="Map" path="/map" />
                        </div>
                        <div className="space-y-3 text-black">
                            <span className="text-xl font-medium">Social</span>
                            <NavLink name="Discord" external path="https://discord.gg/flybywire" />
                            <NavLink name="Twitter" external path="https://twitter.com/FlyByWireSim" />
                            <NavLink name="Facebook" external path="https://facebook.com/FlybywireSimulations/" />
                            <NavLink name="YouTube" external path="https://www.youtube.com/FlyByWireSimulations" />
                            <NavLink name="Twitch" external path="https://www.youtube.com/FlyByWireSimulations" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-y-2">
                <div className="flex flex-wrap gap-y-2 justify-between items-center mt-5">
                    <div className="flex font-semibold text-black divide-x-2 grid-cols">
                        <span className="pr-4 hover:underline cursor-pointer">
                            <Link href="/tos">
                                Terms of Service
                            </Link>
                        </span>
                        <span className="px-4 hover:underline cursor-pointer">
                            <Link href="/privacy">
                                Privacy Policy
                            </Link>
                        </span>
                        <a
                            className="px-4 hover:underline"
                            href="https://github.com/flybywiresim/flybywiresim-website/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                    </div>

                    <a
                        className="flex gap-x-2 justify-end items-center text-utility-dark-grey"
                        href="https://vercel.com/?utm_source=flybywiresim&utm_campaign=oss"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Powered by
                        <Image src="/svg/vercel-logotype-dark.svg" alt="Vercel" width={60} height={20} />
                    </a>
                </div>

                <span className="mt-0 font-medium text-black opacity-50">
                    © FlyByWire Simulations and its contributors 2020-2022
                </span>
            </div>
        </Container>
    </footer>
);
