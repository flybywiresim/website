import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem } from './Dropdown';

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Projects',
        path: 'a32nx'
    },
    {
        name: 'Documentation',
        external: 'https://docs.flybywiresim.com/',
    },
    {
        name: 'Map',
        path: 'map'
    },
    {
        name: 'Community',
        path: '#',
        sublinks: [{
            name: 'Discord',
            external: 'https://discord.gg/flybywire'
        },
        {
            name: 'Twitter',
            external: 'https://twitter.com/FlyByWireSim'
        },
        {
            name: 'Facebook',
            external: 'https://facebook.com/FlybywireSimulations/'
        },
        {
            name: 'YouTube',
            external: 'https://www.youtube.com/FlyByWireSimulations'
        },
        {
            name: 'Coming Soon™',
            path: '#',
        }],
    },
];

export function NavLinks(props: { className?: string }): JSX.Element {
    return (
        <div className={`${props.className} flex flex-col`}>
            {links.map(link =>
                link.sublinks ?
                    <Dropdown className="-ml-1.5" titleName={link.name}>
                        {link.sublinks.map(sublink =>
                            // Check if link.sublink has path, if not use external
                            <div key={sublink.name}>
                                {sublink.path ?
                                    <Link to={sublink.path}>
                                        <DropdownItem>
                                            {sublink.name}
                                        </DropdownItem>
                                    </Link>
                                    :
                                    <a href={sublink.external} target="_blank" rel="noreferrer">
                                        <DropdownItem>
                                            {sublink.name}
                                        </DropdownItem>
                                    </a>
                                }
                            </div>
                        )}
                    </Dropdown>
                    :
                    // Check if path exists if not use external
                    link.path ?
                        <Link className="text-xl m-2 p-1 active:text-blue-light hover:text-gray-200 transition-colors duration-200 hover:text-blue-light"
                            key={link.name}
                            to={link.path}>
                            {link.name}
                        </Link>
                        :
                        <a key={link.name}
                            href={link.external}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xl m-2 p-1 active:text-blue-light hover:text-gray-200 transition-colors duration-200 hover:text-blue-light">
                            {link.name}
                        </a>
            )}
        </div>
    );
}

export function Hamburger(props: { handleClick: () => void }): JSX.Element {

    return (
        <a onClick={props.handleClick} className="cursor-pointer">
            <FontAwesomeIcon icon={faBars} size="2x" />
        </a>
    );
}
