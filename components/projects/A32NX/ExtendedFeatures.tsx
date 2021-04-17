import React from 'react';
import { IconHeadset, IconMap, IconPackage, IconVersions, IconReplace, IconFileText, IconBrandGithub, IconSquareCheck, IconEyeCheck, IconUserCheck, IconDeviceTablet } from '@tabler/icons';

export const ExtendedFeatures: React.FC = () => (
    <section className="rounded-lg mx-auto px-4 py-4 max-w-screen-2xl sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-max mx-auto gap-x-14 gap-y-20 mt-10">

            <Feature key="Accurate System Functionality">
                <IconSquareCheck size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Accurate System Functionality
                </FeatureTitle>
                <FeatureBody>
                    The experimental version of the A32NX includes full rewrites of the default autopilot, Fly-by-wire system and much more.
                </FeatureBody>
            </Feature>

            <Feature key="Custom Soundpack">
                <IconHeadset size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Custom Soundpack
                </FeatureTitle>
                <FeatureBody>
                    The A32NX includes a fully custom and highly accurate sound-pack to enhance that little bit of realism.
                </FeatureBody>
            </Feature>

            <Feature key="Constant Additions">
                <IconReplace size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Constant Additions
                </FeatureTitle>
                <FeatureBody>
                    The A32NX development branches are updated almost daily with brand new features you can test right away and provide feedback on!
                </FeatureBody>
            </Feature>

            <Feature key="Documentation">
                <IconFileText size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Documentation
                </FeatureTitle>
                <FeatureBody>
                    The FlyByWire team has created several tutorials and documents to make learning the A320 easy and enjoyable for anyone!
                </FeatureBody>
            </Feature>

            <Feature key="Electronic Flight Bag">
                <IconDeviceTablet size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Electronic Flight Bag
                </FeatureTitle>
                <FeatureBody>
                    The A32NX comes packed with a custom EFB including a handy toolkit, settings page, performance tools, and much more!
                </FeatureBody>
            </Feature>

            <Feature key="Experimental Variations">
                <IconVersions size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Experimental Variations
                </FeatureTitle>
                <FeatureBody>
                    Want to experiment with our new features? You can! We have several ready to test branches such as Stable, Development and experimental.
                    The experimental version of the A32NX includes full rewrites of the default autopilot, Fly-by-wire system and much more.
                </FeatureBody>
            </Feature>

            <Feature key="Open Source">
                <IconBrandGithub size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Open Source
                </FeatureTitle>
                <FeatureBody>
                    All the FlyByWire Simulations projects such as A32NX is completely open sourced which means anyone can contribute to the project,
                    and it can be freely reused under our licence.
                </FeatureBody>
            </Feature>

            <Feature key="Product Installer">
                <IconPackage size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Product Installer
                </FeatureTitle>
                <FeatureBody>
                    FlyByWire Simulations has a custom product installer which makes the task of installing and updating content hassle free.
                </FeatureBody>
            </Feature>

            <Feature key="simBrief Integration">
                <IconMap size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Simbrief Integration
                </FeatureTitle>
                <FeatureBody>
                    Make flight plan entry a breeze with the simBrief integration. All it takes is one click and you are ready to go!
                </FeatureBody>
            </Feature>

            <Feature key="Verified by Real Pilots">
                <IconUserCheck size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Verified by Real Pilots
                </FeatureTitle>
                <FeatureBody>
                    The A32NX has been analysed and tested by a wide range of real A320 pilots for accuracy to the real aircraft.
                </FeatureBody>
            </Feature>

            <Feature key="Visual Fidelity">
                <IconEyeCheck size={40} stroke={1.5} color="teal" />
                <FeatureTitle>
                    Visual Fidelity
                </FeatureTitle>
                <FeatureBody>
                    The A32NX is packaged with multiple visual reworks including new lighting, reworked textures, and model additions with more to come!
                </FeatureBody>
            </Feature>
        </div>
        <div id="download" />
    </section>
);
const Feature: React.FC = (props) => (
    <div className="w-80 flex flex-row">
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
