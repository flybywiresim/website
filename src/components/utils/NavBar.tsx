import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from './NavLinks';
import Container from './Container';

export const NavBar = () => {
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
            className={`fixed w-full z-50 ${scroll || isOpen ? 'transition bg-navy-dark shadow-lg-dark' : 'transition bg-transparent'}`}
            onClick={handleClick}
        >
            <Container className="py-6">
                <div className="flex space-x-11">
                    <Link href="/">
                        <Image className="cursor-pointer" src="/svg/FBW-Icon.svg" width={36.84} height={34.49} />
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
};
