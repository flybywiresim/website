import React, { forwardRef } from 'react';
import { CardBody, Card, CardTitle } from './Card';
import bgImage from '../../assets/img/feature.jpg';
import { faCogs, faClipboardList, faToolbox, faHeadphones, faEye, faTabletAlt, } from '@fortawesome/free-solid-svg-icons';

export const Features = forwardRef<HTMLDivElement>((_, ref): JSX.Element => (
    <>
        <div className="absolute w-screen">
            <img className="h-full object-cover" src={bgImage} alt="" />
        </div>
        <div id="features" className="bg-blue-darker bg-opacity-95 relative py-14 shadow-inner">
            <div
                className="rounded-lg mx-auto max-w-md px-4 py-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <div className="mx-auto divide-y divide-gray-500 w-1/2 2xl:w-1/4">
                    <h2 className="text-base font-semibold tracking-wider text-blue-200 uppercase">Some of our many</h2>
                    <p className="mt-3 pt-3 text-5xl font-medium text-blue-light">
                        Features
                    </p>
                </div>
                <p className="mt-5 max-w-prose mx-auto text-xl text-white">
                    The volunteers in the community work hard around the clock to consistently bring new features and
                    improve the default A320. Let&apos;s take a look at some of the features the A32NX has to offer!
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card icon={faCogs}>
                            <CardTitle>Accurate System Functionality</CardTitle>
                            <CardBody>The A32NX currently contains many system reworks that are true to life.</CardBody>
                        </Card>
                        <Card icon={faEye}>
                            <CardTitle>Visual Reworks</CardTitle>
                            <CardBody>The A32NX is packaged with multiple visual reworks including new lighting,
                                reworked textures, and model additions.</CardBody>
                        </Card>
                        <Card icon={faTabletAlt}>
                            <CardTitle>Electronic Flight Bag</CardTitle>
                            <CardBody>The EFB is an integrated tablet with a handy toolkit, a settings page, performance
                                tools, and more.</CardBody>
                        </Card>
                        <Card icon={faHeadphones}>
                            <CardTitle>Custom Soundpack</CardTitle>
                            <CardBody>Enjoy sounds like never before, the A32NX includes a fully custom and highly
                                accurate soundpack.</CardBody>
                        </Card>
                        <Card icon={faClipboardList}>
                            <CardTitle>Simbrief Integration</CardTitle>
                            <CardBody>Make flight plan entry a breeze with the SimBrief integration, all it takes is one
                                click and you are ready to go!</CardBody>
                        </Card>
                        <Card icon={faToolbox}>
                            <CardTitle>Product Installer</CardTitle>
                            <CardBody>FlyByWire has a custom product installer, which makes the task of installing all
                                FlyByWire products hassle free.</CardBody>
                        </Card>
                        <div ref={ref} />
                    </div>
                </div>
            </div>
        </div>
    </>
));
