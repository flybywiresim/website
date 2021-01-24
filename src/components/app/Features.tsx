import React from 'react';
import { Body, Card, Title } from './Card';
import { Container } from '../Container';
import img from '../../assets/img/duck.jpg';

export function Features(): JSX.Element {
    return(
        <>
            <div className="py-10">
                <h1 className="text-4xl font-medium text-center">Features</h1>
            </div>

            <Container>
                <div data-aos="fade-up" data-aos-offset="100" className="flex flex-wrap lg:flex-row items-stretch justify-center">
                    <Card className="bg-blue-dark shadow-2xl" imgSrc={img}>
                        <Title className="text-blue-light">Systems Depth</Title>
                        <Body>Unparalleled systems depth on Microsoft Flight Simulator - ATSU&#8288;/&#8288;AOC, upcoming custom fly&#8288;-&#8288;by&#8288;-&#8288;wire, electrical and hydraulic systems</Body>
                    </Card>
                    <Card className="bg-blue-dark shadow-2xl" imgSrc={img}>
                        <Title className="text-blue-light">Graphical and Audio Fidelity</Title>
                        <Body>Tirelessly perfected sounds and visuals - based on thousands of IRL references for the utmost accuracy</Body>
                    </Card>
                    <Card className="bg-blue-dark shadow-2xl" imgSrc={img}>
                        <Title className="text-blue-light">Approved by Real Pilots</Title>
                        <Body>Constantly tested and tried by dozens of IRL A320 pilots and engineers, both in the development team and in the flight simulation community</Body>
                    </Card>
                </div>
            </Container>
        </>
    );
}
