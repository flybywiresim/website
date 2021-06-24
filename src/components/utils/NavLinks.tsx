import { FC } from 'react';
import Link from 'next/link';
import { Dropdown, DropdownItem } from './Dropdown';

export type LinkProps = {
    name: string,
    path: string,
    external?: boolean,
    className?: string
};

export const NavLink = ({ name, path, external, className }: LinkProps) => (
    <li className={`list-none transition cursor-pointer ${className}`}>
        {
            external
                ? (
                    <a href={path}>{name}</a>
                )
                : (
                    <Link href={path}>{name}</Link>
                )
        }
    </li>
);

export const NavLinks = (props: {className?: string}) => (
    <span className={`flex flex-col gap-x-4 gap-y-2 md:items-center ${props.className}`}>
        <NavLink name="Home" path="/" />
        <NavLink name="NOTAMS" path="/notams" />
        <NavLink name="Projects" path="/a32nx" />
        <NavLink name="Documentation" external path="https://docs.flybywiresim.com/" />
        <NavLink name="Map" path="/map" />
        <Dropdown titleName="Community">
            <DropdownItem>
                <NavLink name="Discord" path="https://discord.gg/flybywire" />
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
        </Dropdown>
    </span>
);
