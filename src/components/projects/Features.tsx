import React, { forwardRef } from 'react';
import { CardBody, Card, CardTitle } from '../home/Card';
import { faCogs, faToolbox, faEye } from '@fortawesome/free-solid-svg-icons';

export const Features = forwardRef<HTMLDivElement>((_, ref): JSX.Element => (
    <>
        <div id="features" className="bg-blue-darker bg-opacity-95 relative py-14 shadow-inner">
            <div
                className="rounded-lg mx-auto px-4 py-4 text-center sm:px-6 lg:px-0 lg:w-4/5 lg:max-w-7xl">
                <div className="mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x divide-gray-700">
                        <Card icon={faCogs}>
                            <CardTitle>Accurate System Functionality</CardTitle>
                            <CardBody>The A32NX currently contains many system reworks that are true to life.</CardBody>
                        </Card>
                        <Card icon={faEye}>
                            <CardTitle>Visual Fidelity</CardTitle>
                            <CardBody>The A32NX is packaged with multiple visual reworks including new lighting,
                                reworked textures, and model additions.</CardBody>
                        </Card>
                        <Card icon={faToolbox}>
                            <CardTitle>Verified by Real Pilots</CardTitle>
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
