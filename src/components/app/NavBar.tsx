import React, { useEffect, useState } from 'react';
import logo from '../../assets/svg/white/FBW-Logo-WHITE.svg';
import { Hamburger, NavLinks } from './NavLinks';

const c = {
    nav: 'fixed top-0 left-0 right-0 mx-auto z-50',
    padding: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
    container: 'relative flex items-center justify-between h-16',
    burgerWrapper: 'absolute inset-y-0 right-3 flex items-center md:hidden'
};

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
        <nav className={`${c.nav} ${scroll ? 'transition duration-500 ease-in-out bg-gray-800 shadow-lg-dark' : 'transition duration-500 ease-in-out transparent'}`}>
            <div className={c.padding}>
                <div className={c.container}>
                    <img className="h-9" src={logo} alt=""/>
                    <div className={c.burgerWrapper}>
                        <Hamburger handleClick={() => setOpen(prevState => !prevState)}/>
                    </div>
                    <NavLinks className="hidden md:block" />
                </div>
            </div>
            <NavLinks className={isOpen ? 'md:hidden bg-blue-dark' : 'hidden'}/>
        </nav>
    );
}
