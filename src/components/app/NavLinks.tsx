import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const links = [
    {
        name: 'Home',
        path: '#'
    },
    {
        name: 'Features',
        path: '#features'
    },
    {
        name: 'Pilots',
        path: '#'
    },
    {
        name: 'Developers',
        path: '#'
    },
    {
        name: 'Community',
        path: '#'
    },
];

export function NavLinks(props: {className?: string}): JSX.Element {
    return(
        <div className={`${props.className} flex flex-col`}>
            {links.map(link =>
                <a className="text-xl m-2 p-1 active:text-blue-light hover:text-gray-200 transition-colors duration-200 hover:text-blue-light"
                    key={link.name}
                    href={link.path}>
                    {link.name}
                </a>
            )}
        </div>
    );
}

export function Hamburger(props: {handleClick: () => void}): JSX.Element {

    return(
        <a onClick={props.handleClick} className="cursor-pointer">
            <FontAwesomeIcon icon={faBars} size="2x" />
        </a>
    );
}
