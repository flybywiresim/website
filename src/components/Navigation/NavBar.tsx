import Link from 'next/link';
import Image from 'next/image';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Container from '../Utils/Container';

const NavLink = (props: {href: string, label: string}) => (
    <Link href={props.href} passHref>
        <a className="cursor-pointer text-xl transition hover:text-primary">
            {props.label}
        </a>
    </Link>
);

const NavLinkGroup = () => (
    <ul className="flex flex-col gap-y-4 md:flex-row md:gap-x-8">
        <NavLink href="/" label="Home" />
        <NavLink href="/projects" label="Projects" />
        <NavLink href="/notams" label="NOTAMs" />
        <NavLink href="/" label="Documentation" />
    </ul>
);

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollHandler = () => {
        setIsScrolled(window.scrollY > 2);
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [isScrolled]);

    return (
        <nav
            className={`fixed w-full py-4 text-white transition ${isScrolled || isOpen ? 'bg-secondary-accent-dark' : 'bg-transparent'}`}
            onClick={handleClick}
        >
            <Container className="flex items-center justify-between">
                <Link href="/">
                    <Image className="cursor-pointer" src="/svg/tail/tail.svg" width={30} height={30} />
                </Link>

                <Container className="hidden md:block">
                    <NavLinkGroup />
                </Container>

                <div className="md:hidden">
                    {isOpen
                        ? <CloseOutlined style={{ fontSize: '20px' }} className="cursor-pointer text-white" onClick={handleClick} />
                        : <MenuOutlined style={{ fontSize: '20px' }} className="cursor-pointer text-white" onClick={handleClick} />}
                </div>

            </Container>

            <Container className={`text-center ${isOpen ? 'md:hidden' : 'hidden'}`}>
                <NavLinkGroup />
            </Container>

            <div className={`absolute h-screen w-full ${!isOpen && 'hidden'}`} />
        </nav>
    );
};

export default NavBar;
