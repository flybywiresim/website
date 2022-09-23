import Link from 'next/link';
import Image from 'next/image';
import { MenuOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Container from '../Utils/Container';

const NavLink = (props: {href: string, label: string}) => (
    <Link href="/" passHref>
        <a>
            <h4 className="cursor-pointer rounded-lg transition hover:text-primary">{props.label}</h4>
        </a>
    </Link>
);

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollHandler = () => {
        setIsScrolled(window.scrollY > 2);
    };

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [isScrolled]);

    return (
        <nav className={`fixed top-0 z-50 w-screen py-8 text-white transition ${(isMenuOpen || isScrolled) && 'bg-dark'}`}>
            <Container className="flex items-center justify-between">
                <Link href="/">
                    <a>
                        <Image className="cursor-pointer" src="/svg/tail/tail.svg" alt="FlyByWire Simulations" width={40} height={40} />
                    </a>
                </Link>
                <MenuOutlined style={{ fontSize: '2rem' }} className="cursor-pointer text-white" onClick={handleClick} />
            </Container>
            {/* TODO: Create dropdown component and possibly animate a slide down effect? */}
            {isMenuOpen && (
                <Container>
                    <ul className="grid gap-y-2 text-center">
                        <NavLink href="/" label="Home" />
                        <NavLink href="/" label="Projects" />
                        <NavLink href="/" label="NOTAMs" />
                        <NavLink href="/" label="Documentation" />
                    </ul>
                </Container>
            )}
        </nav>
    );
};

export default NavBar;
