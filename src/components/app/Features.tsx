import React from 'react';
import { Body, Card, Title } from './Card';
import { Container } from '../Container';

export function Features(): JSX.Element {
    return(
        <div>
            <div className="py-10">
                <h1 className="text-4xl font-medium text-center">Features</h1>
            </div>

            <Container className="flex flex-wrap lg:flex-row items-stretch justify-center">
                <Card className="bg-blue-dark shadow-2xl">
                    <Title className="text-blue-light">Systems Depth</Title>
                    <Body>Unparalled systems depth on Microsoft Flight Simulator - ATSU/AOC, maintenance MCDU pages, fully featured ECAM pages</Body>
                </Card>
                <Card className="bg-blue-dark shadow-2xl">
                    <Title className="text-blue-light">Graphical and Audio Fidelity</Title>
                    <Body>Tirelessly perfected sounds and visuals - based on thousands of IRL references for the utmost accuracy</Body>
                </Card>
                <Card className="bg-blue-dark shadow-2xl">
                    <Title className="text-blue-light">Approved by Real Pilots</Title>
                    <Body>Constantly tested and tried by dozens of IRL A320 pilots and engineers, both in the development team and in the flight simulation community</Body>
                </Card>
            </Container>
        </div>
    );
}
