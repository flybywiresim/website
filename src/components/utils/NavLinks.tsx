import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Dropdown, DropdownItem } from './Dropdown';

export type InternalLinkProps = { name: string, path: string }

export const PageLink: FC<InternalLinkProps> = ({ name, path }) => (
    <Link
        key={name}
        href={path}
    >
        <div className="text-xl m-2 p-1 active:text-blue-light transition-colors duration-200 hover:text-blue-light cursor-pointer">
            {name}
        </div>
    </Link>
);

export type ExternalLinkProps = { name: string, external: string }

export const WebLink: FC<ExternalLinkProps> = ({ name, external }) => (
    <a
        key={name}
        href={external}
        target="_blank"
        rel="noreferrer"
        className="text-xl m-2 p-1 active:text-blue-light transition-colors duration-200 hover:text-blue-light cursor-pointer"
    >
        {name}
    </a>
);

export type NavLinksProps = { className?: string }

export const NavLinks: FC<NavLinksProps> = ({ className }) => (
    <div className={`flex flex-col ${className}`}>
        <PageLink name="Home" path="/" />
        <PageLink name="NOTAMS" path="/notams" />
        <PageLink name="Projects" path="/a32nx" />
        <WebLink name="Documentation" external="https://docs.flybywiresim.com/" />
        <PageLink name="Map" path="/map" />
        <Dropdown className="-ml-1.5" titleName="Community">
            <DropdownItem>
                <WebLink name="Discord" external="https://discord.gg/flybywire" />
            </DropdownItem>
            <DropdownItem>
                <WebLink name="Twitter" external="https://twitter.com/FlyByWireSim" />
            </DropdownItem>
            <DropdownItem>
                <WebLink name="Facebook" external="https://facebook.com/FlybywireSimulations/" />
            </DropdownItem>
            <DropdownItem>
                <WebLink name="YouTube" external="https://www.youtube.com/FlyByWireSimulations" />
            </DropdownItem>
            <DropdownItem>
                <WebLink name="Donate" external="https://opencollective.com/flybywire/" />
            </DropdownItem>
        </Dropdown>
    </div>
);

export type HamburgerProps = { handleClick: () => void }

export const Hamburger: FC<HamburgerProps> = ({ handleClick }) => (
    <a onClick={handleClick} className="cursor-pointer">
        <FontAwesomeIcon icon={faBars} size="2x" />
    </a>
);
