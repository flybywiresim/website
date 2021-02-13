import React, { useEffect, useState } from 'react';
import logo from '../../assets/svg/white/FBW-Logo-WHITE.svg';
import { Hamburger, NavLinks } from './NavLinks';

export function NavBar(): JSX.Element {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const listener = () => {
            setScroll(window.scrollY > 2);
        };
        window.addEventListener('scroll', listener);

        return() => window.removeEventListener('scroll', listener);
    }, []);

    const [isOpen, setOpen] = useState(false);

    return(
        <nav className={`fixed top-0 left-0 right-0 mx-auto z-50 ${scroll || isOpen ? 'transition bg-blue-dark-contrast shadow-lg-dark' : 'transition transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <a href="#header">
                        <img className="h-11" src={logo} alt=""/>
                    </a>
                    <div className="absolute inset-y-0 right-3 flex items-center md:hidden">
                        <Hamburger handleClick={() => setOpen(prevState => !prevState)}/>
                    </div>
                    <NavLinks className="hidden md:block" />
                </div>
            </div>
            <NavLinks className={isOpen ? 'md:hidden' : 'hidden'}/>
        </nav>
    );
}
