import Image from 'next/legacy/image';
import Head from 'next/head';
import { NextPage } from 'next';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';
import ProjectHero from '../../components/Projects/ProjectHero';
import Carousel from '../../components/Projects/Carousel/Carousel';
import TextTilePrimary from '../../components/Projects/Carousel/TextTilePrimary';
import TextTileSecondary from '../../components/Projects/Carousel/TextTileSecondary';
import ImageTile from '../../components/Projects/Carousel/ImageTile';
import VectorTile from '../../components/Projects/Carousel/VectorTile';
import VideoSection from '../../components/Projects/VideoSection';
import DownloadSection from '../../components/Projects/DownloadSection';

const BackgroundImage = () => (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-screen opacity-5">
        <Image src="/pages/index/Airfoil.png" layout="fill" objectFit="cover" />
    </div>
);

const A380X: NextPage = () => {
    const projectTitle = 'A380';
    const projectDescription = 'Open source and free to fly, the A380X is the first high-fidelity simulation of the world\'s largest passenger airliner for Microsoft Flight Simulator.';

    return (
        <>
            <Head>
                <title>A380X - FlyByWire Simulations</title>
            </Head>
            <ProjectHero projectTitle={projectTitle} projectDescription={projectDescription} />
            {/* Features Section */}
            <Section className="relative" theme="light">
                <BackgroundImage />
                <Container className="gap-0 md:gap-6">
                    <div>
                        <h2>Discover the A380X</h2>
                    </div>
                    <Carousel theme="light">
                        <ImageTile
                            title="Flight Management and Navigation Systems"
                            imageSrc="/pages/projects/a380x/a380Project.png"
                            imageAlt="A380X exterior view"
                            description={[
                                'Custom flight management system (FMS), based on the updated fms-v2 implementation. ',
                                'All ARINC424 leg types are supported, with an aim for precise and accurate drawing of ',
                                'all procedures, robust sequencing of waypoints and accurate MFD F-PLN pages, including ',
                                'support for holdings.',
                            ].join('')}
                        />
                        <TextTilePrimary
                            title="Flight Displays and Electronic Checklists"
                            description={[
                                'High-fidelity PFD, ND, EWD, and SD displays with accurate system MEMOs. ',
                                'Electronic checklists cover normal and select abnormal procedures. ',
                                'Includes QNH pre-selection capability in the Flight Control Unit (FCU) for ',
                                'realistic cockpit operations.',
                            ].join('')}
                        />
                        <VectorTile
                            title="Core Aircraft Systems and Failure Simulations"
                            vectorSrc="/pages/projects/a380x/a380Project.png"
                            vectorAlt="A380X avionics display"
                            description={[
                                'Electrical, pneumatic, environmental, APU, and fire protection systems are fully modelled, ',
                                'including their internal components, logic, and communication protocols with over 140 failures ',
                                'accessible via the EFB.',
                            ].join('')}
                        />
                        <ImageTile
                            title="4K and 8K Texture Sets"
                            imageSrc="/pages/projects/a380x/a380Project.png"
                            imageAlt="A380X exterior view"
                            description="Sample text"
                        />
                        <TextTilePrimary
                            title="Flight Control Surfaces and Wing Flex Simulation"
                            description={[
                                'Accurate FLRS and AES/ARS modelling with hydraulic/electrical actuation. Features ',
                                'the Valse Des Ailerons (VDA) via triple aileron simulation and a custom physics-based ',
                                'soft-body flex system for wings, rudder, and elevator that reacts to fuel and loading.',
                            ].join('')}
                        />
                        <TextTilePrimary
                            title="Protection Features and Enhanced Awareness"
                        />
                        <TextTilePrimary
                            title="BTV, ROP & OANS"
                            description={[
                                'Advanced landing aids including Brake to Vacate (BTV) and Runway Overrun Warning/Protection ',
                                '(ROW/ROP). Features the Onboard Airport Navigation System (OANS) moving map, triple independent ',
                                'Radio Altimeters, GPWS with PFD integration, and A380-specific Terrain Display animations.',
                            ].join('')}
                        />
                        <TextTilePrimary
                            title="Landing Gear and Taxi Systems"
                            description={[
                                'Tilting landing gear, with realistic NWS (Nose Wheel Steering) and BWS (Body Wheel Steering), ',
                                'with high-detail modelling and textures, powered by 5000 PSI Hydraulic lines, valves and actuators ',
                                'which are fully and realistically simulated.',
                                'We have also managed to implement HCF (Heading Control Function) which assists taxi operations by ',
                                'countering any crosswind or ground slope without any pilot input.',
                            ].join('')}
                        />
                        <TextTilePrimary
                            title="FlyPadOS v3 and Aircraft Configuration"
                            description={[
                                'FlyPadOS v3 remixed with A380X features such as the throttle calibration for 4 throttles/2 throttle/1 ',
                                'throttle hardware configurations, payload weight and balance page with Main and Upper Deck divided into 4 Class configuration: ',
                                'Economy, Premium Economy, Business and First Class Suites and with the corresponding refuelling page.',
                            ].join('')}
                        />
                        <TextTileSecondary
                            title="...and much more!"
                        />
                    </Carousel>
                </Container>
            </Section>
            {/* Tutorials and Documentation Section */}
            <Section className="relative" theme="dark">
                <BackgroundImage />
                <Container className="gap-6">
                    <div>
                        <h2>Tutorials and Documentation</h2>
                        <p>
                            Each page of our documentation has been reviewed by an A380 type rated pilot and provides
                            accurate and in-depth information on aircraft operations.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col gap-2 md:gap-4 h-full justify-between">
                            <p>The A380X Beginner's Guide is tailored towards beginners, while also serving as a useful reference for veteran sim pilots.</p>
                            <Button label="Beginner's Guide" theme="primary" />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4 h-full justify-between">
                            <p>This is a collection of guides and tutorials for real A380 features which go beyond the scope of our beginner guide.</p>
                            <Button label="Advanced Guide" theme="primary" />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4 h-full justify-between">
                            <p>We have created our very own standard operating procedures (SOP) and checklists valid for the A380X.</p>
                            <Button label="SOP and Checklist" theme="primary" />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4 h-full justify-between">
                            <p>Explore an interactive overview of the A380's flight deck. Hover over elements to see their descriptions and click for more details.</p>
                            <Button label="Pilot Briefing" theme="primary" />
                        </div>
                    </div>
                </Container>
            </Section>
            {/* Gallery Section */}
            <Section theme="light">
                <Container className="gap-0 md:gap-6">
                    <h2>Gallery</h2>
                    <Carousel theme="light">
                        <div />
                    </Carousel>
                </Container>
            </Section>
            {/* Trailer Section */}
            <VideoSection videoId="F0WhrKD2ni0" title="Trailer" theme="dark" />
            {/* Download Section */}
            <DownloadSection
                title="Available For Free"
                description={[
                    'Get started by downloading our installer to seamlessly enjoy our projects.',
                    'The A380X is constantly being updated with new features, and the FlyBywire installer makes keeping',
                    'your aircraft up-to-date an absolute breeze. Alternatively, a direct download has also been made',
                    'available.',
                ].join('')}
                buttons={[
                    { label: 'Download Installer', link: '/community', theme: 'primary' },
                    { label: 'Installation Guide', link: '/community', theme: 'secondary' },
                    { label: 'Direct Downloads', link: '/community', theme: 'secondary' },
                ]}
                imageSrc="/pages/index/installerPreview.png"
                imageAlt="FlyByWire Installer screenshot"
            />
            {/* System Requirements Section */}
            <Section className="relative" theme="dark">
                <Container className="gap-0 md:gap-6">
                    <BackgroundImage />
                    <div>
                        <h3>Estimated System Requirements</h3>
                        <p>The following system specifications provide a general guideline for smooth performance with the A380X.</p>
                    </div>
                    <div className="flex flex-col gap-0 md:gap-6 md:flex-row justify-between">
                        <div className="gap-0 md:gap-6 w-full md:w-[300px] min-w-[250px]">
                            <p><b>Minimum</b></p>
                            <ul className="list-disc pl-5">
                                <li>CPU: Intel i5-4460 or Ryzen 3 1400</li>
                                <li>GPU: Nvidia GTX 1060 6GB or AMD RX 480 8GB</li>
                                <li>Memory: 8GB</li>
                                <li>Storage: 28GB* free space (HDD or SSD)</li>
                            </ul>
                            <i className="text-sm opacity-75">At least 4-8GB needed for virtual memory</i>
                        </div>
                        <div className="gap-0 md:gap-6 w-full md:w-[300px] min-w-[250px]">
                            <p><b>Recommended</b></p>
                            <ul className="list-disc pl-5">
                                <li>CPU: Intel i5-8400 or Ryzen 5 3600</li>
                                <li>GPU: Nvidia RTX 3060 12GB or AMD RX 6600 XT 8GB</li>
                                <li>Memory: 16GB</li>
                                <li>Storage: 20GB free space (SSD)</li>
                            </ul>
                        </div>
                        <div className="gap-0 md:gap-6 w-full md:w-[300px] min-w-[250px]">
                            <p><b>Flying By Wire</b></p>
                            <ul className="list-disc pl-5">
                                <li>CPU: Ryzen 7 7800X3D</li>
                                <li>GPU: RTX 4080 Super 16GB or 7900 XTX 24GB</li>
                                <li>Memory: 32GB</li>
                                <li>Storage: 20GB free space (SSD)</li>
                            </ul>
                        </div>
                    </div>
                    <p>Please note that these system requirements are based on the v0.10 open-alpha release and are subject to change as the project evolves.</p>
                </Container>
            </Section>
        </>
    );
};

export default A380X;
