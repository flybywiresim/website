import Link from 'next/link';
import { Button } from '../utils/Button';
import { installerRef } from './Installer';
import Container from '../utils/Container';

export const A320Header = () => {
    const handleClick = () => {
        if (installerRef.current) {
            installerRef.current.scrollIntoView({ block: 'center' });
        }
    };

    return (
        <header>
            <video
                className="fixed w-screen h-screen object-cover opacity-10 -z-10"
                src="https://cdn.flybywiresim.com/assets/website/video/A32NX.mp4"
                playsInline
                autoPlay
                muted
                loop
            />
            <Container className="max-w-6xl relative min-h-screen">
                <div className="absolute h-2/3 bottom-0 left-0 px-page">
                    <h1 className="text-8xl font-bold">
                        <span className="text-teal">A32</span>
                        <span className="text-blue">N</span>
                        X
                    </h1>
                    <p className="max-w-xl">
                        A community built and maintained project aiming to provide high quality and detailed aircraft
                        for Microsoft Flight Simulator.
                    </p>
                    <div className="flex max-w-md my-5 gap-4">
                        <Button
                            onClick={handleClick}
                            className="w-40 bg-blue-light border-2 border-blue-light hover:bg-white hover:text-blue-light"
                        >
                            Installer
                        </Button>

                        <Link href="/a32nx">
                            <Button
                                className="w-44 border-2 border-blue-light text-blue-light hover:bg-white hover:text-blue-light"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};
