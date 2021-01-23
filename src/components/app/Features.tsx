import React from 'react';
import { Body, Card, Title } from './Card';
import { Container } from '../Container';

export function Features(): JSX.Element {
    return(
        <div>
            <div className="py-10">
                <h1 className="text-5xl font-medium text-center">Features</h1>
            </div>

            <Container className="flex flex-wrap lg:flex-row items-stretch justify-center">
                <Card className="bg-blue-dark shadow-2xl">
                    <Title className="text-blue-light">Hello world</Title>
                    <Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate, debitis delectus distinctio facere hic impedit optio possimus praesentium sed!</Body>
                </Card>
                <Card className="bg-blue-dark shadow-2xl">
                    <Title className="text-blue-light">Hello world</Title>
                    <Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate, debitis delectus distinctio facere hic impedit optio possimus praesentium sed!</Body>
                </Card>
                <Card className="bg-blue-dark shadow-2xl">
                    <Title className="text-blue-light">Hello world</Title>
                    <Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate, debitis delectus distinctio facere hic impedit optio possimus praesentium sed!</Body>
                </Card>
            </Container>
        </div>
    );
}
