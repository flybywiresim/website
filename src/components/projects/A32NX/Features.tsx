import React, { forwardRef } from 'react';
import { faCogs, faCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import { CardBody, Card, CardTitle } from '../../utils/Card';

export const Features = forwardRef<HTMLDivElement>((_, ref): JSX.Element => (
    <>
        <div className="mx-auto divide-y divide-gray-500 max-w-2xl px-page mt-12">
            <p className="mt-3 mb-4 pt-3 text-5xl text-center font-medium text-blue-light">
                Features
            </p>
            <p className="pt-5 text-center text-xl">
                {/* eslint-disable-next-line max-len */}
                The volunteers in our community work hard around the clock to consistently bring new features and improve the default A320. Let&apos;s take a look at some of the features the A32NX has to offer!
            </p>
        </div>
        <div id="features" className="bg-blue-darker bg-opacity-95 relative py-14">
            <div className="rounded-lg mx-auto px-page lg:px-0 py-4 text-center lg:max-w-7xl">
                <div className="mt-12">
                    <div className="sm:w-2/3 xl:w-full mx-auto grid grid-cols-1 xl:grid-cols-3 space-y-2 xl:space-y-0 lg:justify-center divide-y xl:divide-x xl:divide-y-0 divide-gray-500">
                        <Card icon={faCogs}>
                            <CardTitle>Accurate System Functionality</CardTitle>
                            <CardBody className="max-w-prose mx-auto">
                                Experimental versions of the A32NX include full rewrites of default autopilot and Fly-by-wire systems and much more.
                            </CardBody>
                        </Card>
                        <div className="pt-5 xl:pt-0">
                            <Card icon={faEye}>
                                <CardTitle>Visual Fidelity</CardTitle>
                                <CardBody className="max-w-prose mx-auto">
                                    The A32NX is packaged with multiple visual reworks including new lighting, reworked textures, and model additions.
                                </CardBody>
                            </Card>
                        </div>
                        <div className="pt-5 xl:pt-0">
                            <Card icon={faCheck}>
                                <CardTitle>Verified by Real Pilots</CardTitle>
                                <CardBody className="max-w-prose mx-auto">
                                    The A32NX has been analyzed and tested by hundreds of real A320 pilots for accuracy to the real life aircraft.
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div ref={ref} />
                </div>
            </div>
        </div>
    </>
));
