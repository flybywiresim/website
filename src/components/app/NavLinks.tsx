import React from "react";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const c = {
    container: 'flex flex-col',
    item: 'text-lg px-3 active:text-blue-light hover:text-gray-200 hover:underline'
}

const links = [
    {
        name: 'Home',
        path: '#'
    },
    {
        name: 'Features',
        path: '#'
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

]

export function NavLinks(props: {className: string}) {
    return(
        <div className={`${props.className} ${c.container}`}>
            {links.map(link => <a className={c.item} key={link.name} href={link.path}>{link.name}</a>)}
        </div>
    );
}

export function Hamburger(props: {handleClick: () => void}) {

    return(
        <a onClick={props.handleClick} className="cursor-pointer">
            <FontAwesomeIcon icon={faBars} size="2x" />
        </a>
    );
}