import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ExtendedFeatures: React.FC = () => (
    <div className="rounded-lg mx-auto px-4 py-4 max-w-screen-2xl sm:px-6 lg:px-8 pb-14">
        <div className="mx-auto divide-y divide-gray-500 w-1/3">
            <p className="mt-3 mb-4 pt-3 text-5xl text-center font-medium text-blue-light">
                Features
            </p>
            <p className="pt-5 text-center">
                The volunteers in our community work hard around the clock to consistently bring new features and improve the default A320. Let&apos;s take a look at some of the features the A32NX has to offer!
            </p>
        </div>

        <div className="grid grid-cols-4 max-w-max mx-auto gap-x-20 gap-y-20 mt-10">
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

            <Feature>
                <FeatureTitle>
                    Title
                </FeatureTitle>
                <FeatureBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, sunt?
                </FeatureBody>
            </Feature>

            <Feature>
                <FeatureTitle>
                    Title
                </FeatureTitle>
                <FeatureBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, sunt?
                </FeatureBody>
            </Feature>

            <Feature>
                <FeatureTitle>
                    Title
                </FeatureTitle>
                <FeatureBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, sunt?
                </FeatureBody>
            </Feature>

            <Feature>
                <FeatureTitle>
                    Title
                </FeatureTitle>
                <FeatureBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, sunt?
                </FeatureBody>
            </Feature>
        </div>
    </div>
);

const Feature: React.FC = (props) => (
    <div className="w-80 flex flex-row">
        <FontAwesomeIcon className="mb-auto mt-1 mr-4 text-green-500 text-2xl" size="1x" icon={ faCheck } />
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
