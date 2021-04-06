import React, { forwardRef } from 'react';
import { faCogs, faCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import { CardBody, Card, CardTitle } from '../../utils/Card';

export const Features = forwardRef<HTMLDivElement>((_, ref): JSX.Element => (
    <>
        <div className="mx-auto divide-y divide-gray-500 max-w-2xl mt-12 px-4">
            <p className="mt-3 mb-4 pt-3 text-5xl text-center font-medium text-blue-light">
                What We&apos;d Like To Share
            </p>
            <p className="pt-5 text-center text-xl">
                {/* eslint-disable-next-line max-len */}
                The A380X is one of our up-and-coming projects that we know the community will love! It is still in early-development, and has some time to go until release, but we have luckily been able to provide the community with early sneak-peak progress photos!
            </p>
        </div>
        <div id="features" className="bg-blue-darker bg-opacity-95 relative py-14">
            <div className="rounded-lg mx-auto px-4 py-4 text-center sm:px-6 lg:px-0 lg:max-w-7xl">
                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 space-y-2 lg:justify-center divide-y md:divide-x md:divide-y-0 divide-gray-500">
                        <div className="pt-2">
                            <Card icon={faCogs}>
                                <CardTitle>Incorporates Modular Systems</CardTitle>
                                <CardBody>The A380X uses modular electrical, hydraulic, and fly-by-wire systems also incorporated into the A32NX</CardBody>
                            </Card>
                        </div>
                        <div className="pt-5 md:pt-0">
                            <Card icon={faEye}>
                                <CardTitle>Visual Fidelity</CardTitle>
                                <CardBody>The A380X has been modeled from the ground up by our dedicated modelers to closely match the detail present in the real aircraft.</CardBody>
                            </Card>
                        </div>
                        <div className="pt-5 md:pt-0">
                            <Card icon={faCheck}>
                                <CardTitle>True-To-Life Detail</CardTitle>
                                <CardBody>The A380X is being developed from the ground up with Airbus documentation and input from real pilots.</CardBody>
                            </Card>
                        </div>
                    </div>
                    <div ref={ref} />
                </div>
            </div>
        </div>
    </>
));
