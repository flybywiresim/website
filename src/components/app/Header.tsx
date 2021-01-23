import React from "react";
// @ts-ignore
import video from "../../assets/video/A32NX.mp4";
import {Button} from "../Button";
import {Container} from "../Container";
import A320 from '../../assets/svg/a32nx_nose.svg';

const c = {
    emphLB: 'text-blue-light',
    emphB: 'text-blue',
}

export function Header() {
    return (
        <header className="AppHeader bg-blue-dark h-screen">
            <Container className="absolute max-w-6xl inset-x-2 inset-y-1/3 z-30">
                <h1 className="text-7xl sm:text-8xl font-medium pb-3">
                    <span className={c.emphLB}>A32</span><span className={c.emphB}>N</span>X
                </h1>
                <p className="text-lg max-w-lg">A <span className={c.emphLB}>community</span> built and maintained project aiming to provide study-level aircraft for Microsoft Flight
                    Simulator.</p>
                <div className="flex max-w-md py-5">
                    <Button name="Download" className="bg-blue-light transition hover:bg-white hover:text-blue-light mr-2 font-medium text-xl"/>
                    <Button name="NOTAMS" className="border-2 transition hover:bg-white hover:text-blue-dark font-medium"/>
                </div>
            </Container>

            <img className="hidden md:block absolute items-center h-screen left-1/2 opacity-50" src={A320} alt="" draggable="false" />

            <video className="absolute top-0 h-screen object-cover w-screen opacity-10" src={video} playsInline autoPlay
                   muted loop/>
        </header>
    );
}