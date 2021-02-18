import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem } from './Dropdown';

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Projects',
        path: 'projects'
    },
    {
        name: 'Documentation',
        external: 'https://docs.flybywiresim.com/',
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
            name: 'YouTube',
            external: 'https://www.youtube.com/channel/UCX-dvWU-YQi5U2UjUBtrthg'
        },
        {
            name: 'Blog',
            path: '/blog',
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
                                    <a href={sublink.path}>
                                        <DropdownItem>
                                            {sublink.name}
                                        </DropdownItem>
                                    </a>
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
