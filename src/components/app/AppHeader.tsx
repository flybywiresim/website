import React from "react";
// @ts-ignore
import video from "../../assets/video/A32NX.mp4";
import {Button} from "../Button";
import {Container} from "../Container";

const c = {
    emphLB: 'text-blue-light',
    emphB: 'text-blue',
}

export function AppHeader() {
    return (
        <header className="AppHeader bg-blue-dark h-screen">
            <Container className="absolute inset-x-2 inset-y-1/4">
                <h1 className="text-8xl font-medium pb-3">
                    <span className={c.emphLB}>A32</span><span className={c.emphB}>N</span>X
                </h1>
                <p className="text-lg max-w-lg">A <span className={c.emphLB}>community</span> built and maintained project aiming to provide study-level aircraft for Microsoft Flight
                    Simulator.</p>
                <Button />
                <Button />
            </Container>
            <video className="absolute top-0 h-screen object-cover w-screen opacity-10" src={video} playsInline autoPlay
                   muted loop/>
        </header>
    );
}