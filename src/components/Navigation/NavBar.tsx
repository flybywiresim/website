import Link from 'next/link';
import Image from 'next/image';
import { MenuOutlined } from '@ant-design/icons';
import Container from '../Utils/Container';

const NavBar = () => (
    <nav className="absolute z-50 w-screen py-8">
        <Container className="flex items-center justify-between">
            <Link href="/">
                <Image className="cursor-pointer" src="/svg/tail/tail.svg" alt="FlyByWire Simulations" width={40} height={40} />
            </Link>
            <MenuOutlined style={{ fontSize: '2rem' }} className="text-white" />
        </Container>
    </nav>
);

export default NavBar;
