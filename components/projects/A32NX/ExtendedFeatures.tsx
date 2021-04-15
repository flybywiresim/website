import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ExtendedFeatures: React.FC = () => (
    <section className="rounded-lg mx-auto px-page py-4 max-w-screen-2xl sm:px-6 lg:px-8 pb-20">
        <div className="grid
                        grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3
                        2xl:grid-cols-4
                        max-w-max mx-auto gap-x-16 gap-y-20 mt-10"
        >
            <Feature key="EFB">
                <FeatureTitle>
                    Electronic Flight Bag
                </FeatureTitle>
                <FeatureBody>
                    The EFB is an integrated tablet with a handy toolkit, a settings page, performance tools, and more.
                </FeatureBody>
            </Feature>

            <Feature key="Custom Soundpack">
                <FeatureTitle>
                    Custom Soundpack
                </FeatureTitle>
                <FeatureBody>
                    Enjoy sounds like never before, the A32NX includes a fully custom and highly accurate soundpack.
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
                    FlyByWire has a custom product installer, which makes the task of installing all FlyByWire products hassle free.
                </FeatureBody>
            </Feature>

            <Feature key="Experimental Variations">
                <FeatureTitle>
                    Experimental Variations
                </FeatureTitle>
                <FeatureBody>
                    Want to experiment with our new features? You can! We have several ready to test branches with experimental features on our installer!
                </FeatureBody>
            </Feature>

            <Feature key="Constant Additions">
                <FeatureTitle>
                    Constant Additions
                </FeatureTitle>
                <FeatureBody>
                    The A32NX development branches are updated almost daily with brand new features you can test right away!
                </FeatureBody>
            </Feature>

            <Feature key="Documentation">
                <FeatureTitle>
                    Documentation
                </FeatureTitle>
                <FeatureBody>
                    FlyByWire has created several tutorials and documents to make learning the A320 quickly and accurately possible for anyone!
                </FeatureBody>
            </Feature>

            <Feature key="Open Source">
                <FeatureTitle>
                    Open Source
                </FeatureTitle>
                <FeatureBody>
                    The FlyByWire A32NX is completely open sourced, anyone can contribute to the project, and it can be freely reused under our licence.
                </FeatureBody>
            </Feature>
        </div>
        <div id="download" />
    </section>
);

const Feature: React.FC = (props) => (
    <div className="max-w-prose md:w-96 flex flex-row">
        <FontAwesomeIcon className="mb-auto mt-1 mr-5 text-green-500 text-2xl" size="1x" icon={faCheck} />
        <div className="space-y-3">
            {props.children}
        </div>
    </div>
);

const FeatureTitle: React.FC = (props) => (
    <h1 className="font-semibold text-2xl">{props.children}</h1>
);

const FeatureBody: React.FC<{ className?: string }> = ({ children, className }) => (
    <p className={`text-lg text-left ${className}`}>
        {children}
    </p>
);
