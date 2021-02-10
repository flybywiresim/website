import React from 'react';
import video from '../../assets/video/A32NX.mp4';
import { Button } from '../Button';
import { Container } from '../Container';

const c = {
    emphLB: 'text-blue-light',
    emphB: 'text-blue',
};

export function Header(): JSX.Element {
    return (
        <header className="AppHeader h-screen">
            <Container className="absolute max-w-6xl inset-x-2 inset-y-1/3 z-30">
                <h1 data-aos="fade-right" data-aos-delay="500" className="text-7xl sm:text-8xl font-medium pb-3">
                    <span className={c.emphLB}>A32</span><span className={c.emphB}>N</span>X
                </h1>
                <p data-aos="fade-up" className="text-lg max-w-lg">A community built and maintained project aiming to provide high quality and detailed aircraft for Microsoft Flight
                    Simulator.</p>
                <div data-aos="fade-up" data-aos-delay="200" className="flex max-w-md py-5">
                    <a href="#download">
                        <Button className="w-40 bg-blue-light border-2 border-blue-light transition hover:bg-white hover:text-blue-light mr-3 font-medium">Download</Button>
                    </a>
                    <a href="https://app.gitbook.com/@flybywire-simulations/s/flybywire-simulations/" target="_blank" rel="noreferrer">
                        <Button className="w-32 border-2 border-blue-light text-blue-light transition hover:bg-white hover:text-blue-light font-medium">Manuals</Button>
                    </a>
                </div>
            </Container>

            <video className="absolute top-0 h-screen object-cover w-screen opacity-10" src={video} playsInline autoPlay
                muted loop/>
        </header>
    );
}
