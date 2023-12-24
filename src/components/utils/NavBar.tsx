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
            className={`fixed z-50 w-full ${scroll || isOpen ? 'bg-blue-dark-contrast shadow-lg-dark transition' : 'bg-transparent transition'}`}
            onClick={handleClick}
        >
            <Container className="p-4">
                <div className="flex justify-between space-x-4">
                    <Link href="/">
                        <Image className="cursor-pointer" src="/svg/white/FBW-Logo-WHITE.svg" width={180} height={40} />
                    </Link>
                    <span className="flex h-10 w-7 cursor-pointer flex-col place-content-center transition md:hidden" onClick={() => setOpen(!isOpen)}>
                        <div className={`${isOpen && 'translate-y-[3px] rotate-45'} h-[3px] rounded-full bg-white duration-200`} />
                        <div className={`${isOpen ? 'h-0' : 'my-[5px] h-[3px]'} rounded-full bg-white`} />
                        <div className={`${isOpen && '-rotate-45'}  h-[3px] rounded-full bg-white duration-200`} />
                    </span>
                    <NavLinks className="hidden md:flex md:flex-row" />
                </div>
                <NavLinks className={`${isOpen ? 'py-1 md:hidden' : 'hidden'}`} />
            </Container>
            <div className={`absolute h-screen w-full ${!isOpen && 'hidden'}`} />
        </nav>
    );
};
