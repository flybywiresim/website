import Image from 'next/Image';
import Link from 'next/link';
import Container from './Container';
import { NavLink } from './NavLinks';

export const Footer = () => (
    <footer className="bg-white">
        <Container className="flex flex-row justify-between py-14 px-56 space-y-2">
            <div>
                <Link href="/">
                    <Image className="cursor-pointer" src="/svg/FBW-Icon.svg" width={73.54} height={68.84} />
                </Link>
                <div className="text-black">
                    <h4 className="mt-20 font-semibold opacity-70">
                        Contact Us
                    </h4>
                    <p className="font-semibold">contact@flybywiresim.com</p>
                </div>
                <div className="flex mt-5 font-semibold text-black divide-x-2 grid-cols">
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
                <span className="mt-7 font-medium text-black opacity-50">
                    © FlyByWire Simulations and its contributors 2020-2021
                </span>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex space-x-28">
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
                <div>
                    <a
                        className="flex justify-end text-utility-dark-grey"
                        href="https://vercel.com/?utm_source=flybywiresim&utm_campaign=oss"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Powered by
                        <span className="mx-2 mt-[1px]">
                            <Image src="/svg/vercel-logotype-dark.svg" alt="Vercel" width={60} height={20} />
                        </span>
                    </a>
                </div>
            </div>
        </Container>
    </footer>
);
