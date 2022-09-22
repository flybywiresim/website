import Link from 'next/link';
import Image from 'next/image';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Container from '../Utils/Container';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={`fixed z-50 w-screen py-8 text-white transition ${isMenuOpen && 'bg-dark'}`}>
                <Container className="flex items-center justify-between">
                    <Link href="/">
                        <Image className="cursor-pointer" src="/svg/tail/tail.svg" alt="FlyByWire Simulations" width={40} height={40} />
                    </Link>
                    <MenuOutlined style={{ fontSize: '2rem' }} className="cursor-pointer text-white" onClick={handleClick} />
                </Container>
                {/* TODO: Create dropdown component and possibly animate a slide down effect? */}
                {isMenuOpen && (
                    <Container>
                        <ul className="grid gap-y-2 text-center">
                            <Link href="/">
                                <h4>Home</h4>
                            </Link>
                            <Link href="/">
                                <h4>Projects</h4>
                            </Link>
                            <Link href="/">
                                <h4>NOTAMs</h4>
                            </Link>
                            <Link href="/">
                                <h4>Documentation</h4>
                            </Link>
                            <Link href="/">
                                <h4>Community</h4>
                            </Link>
                        </ul>
                    </Container>
                )}
            </nav>
        </>
    );
};

export default NavBar;
