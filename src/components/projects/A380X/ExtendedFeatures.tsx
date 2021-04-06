import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ExtendedFeatures: React.FC = () => (
    <section className="rounded-lg mx-auto px-4 py-4 max-w-screen-2xl sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-max mx-auto gap-x-14 gap-y-20 mt-10">
            <Feature key="EFB">
                <FeatureTitle>
                    Electronic Flight Bag
                </FeatureTitle>
                <FeatureBody>
                    The A380X will feature an adapted EFB already featured on the A32NX.
                </FeatureBody>
            </Feature>

            <Feature key="Custom Soundpack">
                <FeatureTitle>
                    Custom Soundpack
                </FeatureTitle>
                <FeatureBody>
                    The A380X includes a fully custom and highly accurate soundpack.
                </FeatureBody>
            </Feature>

            <Feature key="Simbrief Integration">
                <FeatureTitle>
                    Simbrief Integration
                </FeatureTitle>
                <FeatureBody>
                    Make flight plan entry a breeze with the SimBrief integration, all it takes is one click and you are ready to go!
                </FeatureBody>
            </Feature>

            <Feature key="Product Installer">
                <FeatureTitle>
                    Product Installer
                </FeatureTitle>
                <FeatureBody>
                    FlyByWire has a custom, open-source product installer, which makes the task of installing and updating all FlyByWire products hassle free.
                </FeatureBody>
            </Feature>

            <Feature key="Experimental Variations">
                <FeatureTitle>
                    Early Access
                </FeatureTitle>
                <FeatureBody>
                    Although the A380X is not currently available, it will be made open source and available for everyone to try.
                </FeatureBody>
            </Feature>

            <Feature key="Constant Additions">
                <FeatureTitle>
                    Constant Additions
                </FeatureTitle>
                <FeatureBody>
                    With the efforts of our 153 combined contributors, you can expect constant new additions to increase the fidelity of the aircraft!
                </FeatureBody>
            </Feature>

            <Feature key="Documentation">
                <FeatureTitle>
                    Documentation
                </FeatureTitle>
                <FeatureBody>
                    FlyByWire will create several tutorial videos and guides to help you get flying as soon as possible.
                </FeatureBody>
            </Feature>

            <Feature key="Open Source">
                <FeatureTitle>
                    Open Source
                </FeatureTitle>
                <FeatureBody>
                    The FlyByWire A380X upon release will be open-source, meaning anyone can contribute to improve the aircraft.
                </FeatureBody>
            </Feature>
        </div>
        <div id="download" />
    </section>
);

const Feature: React.FC = (props) => (
    <div className="w-80 flex flex-row">
        <FontAwesomeIcon className="mb-auto mt-1 mr-4 text-green-500 text-2xl" size="1x" icon={faCheck} />
        <div className="space-y-3">
            {props.children}
        </div>
    </div>
);

const FeatureTitle: React.FC = (props) => (
    <h1 className="font-semibold text-2xl">{props.children}</h1>
);

const FeatureBody: React.FC = (props) => (
    <p className="text-lg text-left">{props.children}</p>
);
