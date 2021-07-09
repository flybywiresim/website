import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from './NavLinks';
import Container from './Container';

export function NavBar(): JSX.Element {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const scrollHandler = () => {
            setScroll(window.scrollY > 2);
        };

        const resizeHandler = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };

        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', resizeHandler);
        };
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
                    <span className="flex flex-col place-content-center w-7 h-10 transition cursor-pointer md:hidden" onClick={() => setOpen(!isOpen)}>
                        <div className={`${isOpen && 'rotate-45 translate-y-[3px]'} duration-200 h-[3px] bg-white rounded-full`} />
                        <div className={`${isOpen ? 'h-0' : 'h-[3px] my-[5px]'} bg-white rounded-full`} />
                        <div className={`${isOpen && '-rotate-45'}  duration-200 h-[3px] bg-white rounded-full`} />
                    </span>
                    <NavLinks className="hidden md:flex md:flex-row" />
                </div>
                <NavLinks className={`${isOpen ? 'py-1 md:hidden' : 'hidden'}`} />
            </Container>
            <div className={`absolute w-full h-screen ${!isOpen && 'hidden'}`} />
        </nav>
    );
}
