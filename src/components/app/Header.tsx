import React from 'react';
import { Button } from '../Button';
import { Container } from '../Container';

export function Header(): JSX.Element {
    return (
        <header id="header" className="AppHeader h-screen">
            <Container className="absolute max-w-6xl inset-x-2 inset-y-1/3 z-30">
                <h1 className="text-7xl sm:text-8xl font-medium pb-3">
                    <span className="text-blue-light">A32</span><span className="text-blue">N</span>X
                </h1>
                <p className="text-lg max-w-lg">A community built and maintained project aiming to provide high quality and detailed aircraft for Microsoft Flight
                    Simulator.</p>
                <div className="flex max-w-md py-5">
                    <a href="#download">
                        <Button className="w-40 bg-blue-light border-2 border-blue-light transition hover:bg-white hover:text-blue-light mr-3 font-medium">Download</Button>
                    </a>
                    <a href="https://app.gitbook.com/@flybywire-simulations/s/flybywire-simulations/" target="_blank" rel="noreferrer">
                        <Button className="w-32 border-2 border-blue-light text-blue-light transition hover:bg-white hover:text-blue-light font-medium">Manuals</Button>
                    </a>
                </div>
            </Container>

            <video className="absolute top-0 h-screen object-cover w-screen opacity-10" src="https://flybywiresim-packages.b-cdn.net/assets/website/A32NX.mp4" playsInline autoPlay
                muted loop/>
        </header>
    );
}
