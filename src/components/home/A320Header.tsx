import Link from 'next/link';
import { Button, ButtonType } from '../utils/Button';
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
                className="object-cover fixed -z-10 w-screen h-screen opacity-10"
                src="https://cdn.flybywiresim.com/assets/website/video/A32NX.mp4"
                playsInline
                autoPlay
                muted
                loop
            />
            <Container className="relative min-h-screen">
                <div className="absolute bottom-0 left-0 h-2/3 px-page">
                    <h3 className="text-3xl font-semibold text-cyan-dark">
                        FlyByWire Simulations
                    </h3>
                    <h1 className="text-8xl font-semibold text-quasi-white">
                        A32NX
                    </h1>
                    <p className="mt-4 max-w-xl text-2xl">
                        A community built and maintained project aiming to provide high quality and detailed aircraft
                        for Microsoft Flight Simulator.
                    </p>
                    <div className="flex gap-4 my-5 max-w-md">
                        <Button
                            type={ButtonType.Emphasis}
                            onClick={handleClick}
                            className="w-40 hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light"
                        >
                            Installer
                        </Button>

                        <Link href="/a32nx">
                            <Button
                                className="w-44 text-blue-light hover:text-blue-light hover:bg-white border-2 border-blue-light"
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
