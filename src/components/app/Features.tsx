import React from 'react';
import { CardBody, Card, CardTitle } from './Card';
import bgImage from '../../assets/img/feature.png';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export function Features(): JSX.Element {
    return(
        <>
            <div className="absolute w-screen" data-aos="fade-in">
                <img className="h-full object-cover" src={bgImage} alt=""/>
            </div>
            <div className="bg-blue-darker bg-opacity-95 relative py-14 shadow-inner ">
                <div className="rounded-lg mx-auto max-w-md px-4 py-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="mx-auto divide-y divide-gray-500 w-1/2 2xl:w-1/4">
                        <h2 className="text-base font-semibold tracking-wider text-blue-200 uppercase" data-aos="zoom-in">Some of our many</h2>
                        <p className="mt-3 pt-3 text-5xl font-medium text-blue-light" data-aos="zoom-out">
                            Features
                        </p>
                    </div>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-white" data-aos="fade-in">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maiores odio voluptate. Deleniti, quae repellat repellendus sit totam unde velit.
                    </p>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <Card icon={faCoffee}>
                                <CardTitle>Hello world</CardTitle>
                                <CardBody>Lorem ipsum.</CardBody>
                            </Card>
                            <Card icon={faCoffee}>
                                <CardTitle>Hello world</CardTitle>
                                <CardBody>Lorem ipsum.</CardBody>
                            </Card>
                            <Card icon={faCoffee}>
                                <CardTitle>Hello world</CardTitle>
                                <CardBody>Lorem ipsum.</CardBody>
                            </Card>
                            <Card icon={faCoffee}>
                                <CardTitle>Hello world</CardTitle>
                                <CardBody>Lorem ipsum.</CardBody>
                            </Card>
                            <Card icon={faCoffee}>
                                <CardTitle>Hello world</CardTitle>
                                <CardBody>Lorem ipsum.</CardBody>
                            </Card>
                            <Card icon={faCoffee}>
                                <CardTitle>Hello world</CardTitle>
                                <CardBody>Lorem ipsum.</CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
