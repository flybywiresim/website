import Link from 'next/link';
import { Dropdown, DropdownItem } from './Dropdown';

export type LinkProps = {
    name: string,
    path: string,
    external?: boolean,
    className?: string
};

export const NavLink = ({ name, path, external, className }: LinkProps) => (
    <li className={`text-xl font-manrope list-none transition w-full cursor-pointer hover:text-teal ${className}`}>
        {
            external ? (
                <a href={path}>
                    {name}
                </a>
            ) : (
                <Link href={path}>
                    {name}
                </Link>
            )
        }
    </li>
);

export const NavLinks = (props: { className?: string }) => (
    <span className={`flex flex-col gap-x-11 gap-y-2 md:items-center ${props.className}`}>
        <NavLink name="Home" path="/" />
        <NavLink name="Projects" path="/a32nx" />
        <NavLink name="NOTAMs" path="/notams" />
        <NavLink name="Documentation" external path="https://docs.flybywiresim.com/" />
        <Dropdown titleName="Community">
            <DropdownItem>
                <NavLink name="Discord" external path="https://discord.gg/flybywire" />
            </DropdownItem>
            <DropdownItem>
                <NavLink name="Twitter" external path="https://twitter.com/FlyByWireSim" />
            </DropdownItem>
            <DropdownItem>
                <NavLink name="Facebook" external path="https://facebook.com/FlybywireSimulations/" />
            </DropdownItem>
            <DropdownItem>
                <NavLink name="YouTube" external path="https://www.youtube.com/FlyByWireSimulations" />
            </DropdownItem>
            <DropdownItem>
                <NavLink name="Donate" external path="https://opencollective.com/flybywire/" />
            </DropdownItem>
            <DropdownItem>
                <NavLink name="Map" path="/map" />
            </DropdownItem>
        </Dropdown>
    </span>
);
