import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ExtendedFeatures = () => (
    <section className="px-page mx-auto max-w-screen-2xl rounded-lg py-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto
                        grid
                        max-w-max
                        grid-cols-1
                        gap-x-16
                        gap-y-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
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

const Feature: FC = ({ children }) => (
    <div className="flex max-w-prose flex-row md:w-96">
        <FontAwesomeIcon className="mb-auto mr-5 mt-1 text-2xl text-green-500" size="1x" icon={faCheck} />
        <div className="space-y-3">
            {children}
        </div>
    </div>
);

const FeatureTitle: FC = ({ children }) => (
    <h1 className="text-2xl font-semibold">{children}</h1>
);

const FeatureBody: FC<{ className?: string }> = ({ children, className }) => (
    <p className={`text-left text-lg ${className}`}>
        {children}
    </p>
);
