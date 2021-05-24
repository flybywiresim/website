import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hamburger, NavLinks } from './NavLinks';

export function NavBar(): JSX.Element {
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
        <nav className="flex flex-col fixed top-0 left-0 right-0 mx-auto z-50">
            <div className={`py-0 md:py-2 ${scroll || isOpen ? 'transition bg-blue-dark-contrast shadow-lg-dark' : 'transition bg-transparent'}`}>
                <div className="max-w-6xl mx-auto px-page">
                    <div className="relative flex items-center justify-between h-16">
                        <Link href="/">
                            <Image className="cursor-pointer" src="/svg/white/FBW-Logo-WHITE.svg" width={180} height={40} />
                        </Link>
                        <div className="absolute inset-y-0 right-3 flex items-center md:hidden">
                            <Hamburger handleClick={() => setOpen((prevState) => !prevState)} />
                        </div>
                        <div className="flex flex-row items-center">
                            <NavLinks className="hidden md:flex md:flex-row" />
                        </div>
                    </div>
                </div>
                <div onClick={() => setOpen(!isOpen)}>
                    <NavLinks className={`px-page md:px-0 ${isOpen ? 'md:hidden' : 'hidden'}`} />
                </div>
            </div>
            <div className={`h-screen ${isOpen ? 'md:hidden' : 'hidden'}`} onClick={() => setOpen(!isOpen)} />
        </nav>
    );
}
