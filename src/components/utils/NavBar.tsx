import React, { useEffect, useState } from 'react';
import logo from '../../assets/svg/white/FBW-Logo-WHITE.svg';
import { Hamburger, NavLinks } from './NavLinks';
import { Dropdown, DropdownItem } from '../utils/Dropdown';

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
        <nav className={`fixed top-0 left-0 right-0 mx-auto py-2 z-50 ${scroll ? 'transition bg-blue-dark-contrast shadow-lg-dark' : 'transition transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <img onClick={scrollTop} className="subpixel-antialiased h-11" src={logo} alt="" />
                    <div className="absolute inset-y-0 right-3 flex items-center md:hidden">
                        <Hamburger handleClick={() => setOpen(prevState => !prevState)} />
                    </div>
                    <div className="flex flex-row items-center">
                        <NavLinks className="hidden md:block" />
                        <Dropdown className="-ml-1.5" titleName="Community">
                            <DropdownItem name="Social Media" link="/socials" />
                            <DropdownItem name="Development Blog" link="/blog" />
                        </Dropdown>
                    </div>
                </div>
            </div>
            <NavLinks className={isOpen ? 'md:hidden' : 'hidden'} />
        </nav>
    );
}
