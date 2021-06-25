import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconMenu2 } from '@tabler/icons';
import { NavLinks } from './NavLinks';
import Container from './Container';

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

    function handleClick() {
        if (isOpen) {
            setOpen(!isOpen);
        }
    }
    return (
        <nav
            className={`fixed w-full z-50 ${scroll || isOpen ? 'transition bg-blue-dark-contrast shadow-lg-dark' : 'transition bg-transparent'}`}
            onClick={handleClick}
        >
            <Container className="p-4">
                <div className="flex justify-between space-x-4">
                    <Link href="/">
                        <Image className="cursor-pointer" src="/svg/white/FBW-Logo-WHITE.svg" width={180} height={40} />
                    </Link>
                    <IconMenu2 className="md:hidden self-center cursor-pointer" size={32} onClick={() => setOpen(!isOpen)} />
                    <NavLinks className="hidden md:flex md:flex-row" />
                </div>
                <NavLinks className={`${isOpen ? 'py-1 md:hidden' : 'hidden'}`} />
            </Container>
            <div className={`absolute w-full h-screen ${isOpen ? '' : 'hidden'}`} />
        </nav>
    );
}
