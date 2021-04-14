import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/white/FBW-Logo-WHITE.svg';
import { Hamburger, NavLinks } from './NavLinks';

export function NavBar(): JSX.Element {
    // Nav logo onClick scroll to top of the page.
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const listener = () => {
            setScroll(window.scrollY > 2);
        };
        window.addEventListener('scroll', listener);

        return () => window.removeEventListener('scroll', listener);
    }, []);

    const [isOpen, setOpen] = useState(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 mx-auto py-2 z-50 ${scroll || isOpen ? 'transition bg-blue-dark-contrast shadow-lg-dark' : 'transition bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-page">
                <div className="relative flex items-center justify-between h-16">
                    <Link to="/" onClick={scrollTop}>
                        <img className="subpixel-antialiased h-11 cursor-pointer" src={logo} alt="" />
                    </Link>
                    <div className="absolute inset-y-0 right-3 flex items-center md:hidden">
                        <Hamburger handleClick={() => setOpen((prevState) => !prevState)} />
                    </div>
                    <div className="flex flex-row items-center">
                        <NavLinks className="hidden md:block" />
                    </div>
                </div>
            </div>
            <NavLinks className={`px-page md:px-0 ${isOpen ? 'md:hidden' : 'hidden'}`} />
        </nav>
    );
}
