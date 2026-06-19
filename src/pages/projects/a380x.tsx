import Image from 'next/legacy/image';
import Head from 'next/head';
import { NextPage } from 'next';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import ProjectHero from '../../components/Projects/ProjectHero';
import FeatureCarousel from '../../components/Projects/Carousel/FeatureCarousel';
import GalleryCarousel from '../../components/Projects/Carousel/GalleryCarousel';
import TextTilePrimary from '../../components/Projects/Carousel/TextTilePrimary';
import TextTileSecondary from '../../components/Projects/Carousel/TextTileSecondary';
import ImageTile from '../../components/Projects/Carousel/ImageTile';
import ScreenshotTile from '../../components/Projects/Carousel/ScreenshotTile';
import VectorTile from '../../components/Projects/Carousel/VectorTile';
import VideoSection from '../../components/Projects/VideoSection';
import SystemRequirementsSection from '../../components/Projects/SystemRequirementsSection';
import ResourcesSection from '../../components/Projects/ResourcesSection';
import DownloadSection from '../../components/Projects/DownloadSection';

const BackgroundImage = () => (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-screen opacity-5">
        <Image src="/pages/index/Airfoil.png" layout="fill" objectFit="cover" />
    </div>
);

const tutorialResources = [
    {
        description: 'The A380X Beginner\'s Guide is tailored towards beginners, while also serving as a useful reference for veteran sim pilots.',
        button: { label: "Beginner's Guide", theme: 'primary' as const, link: 'http://docs.flybywiresim.com/pilots-corner/a380x/a380x-beginner-guide/overview/' },
    },
    {
        description: 'This is a collection of guides and tutorials for real A380 features which go beyond the scope of our beginner guide.',
        button: { label: 'Advanced Guide', theme: 'primary' as const, link: 'http://docs.flybywiresim.com/pilots-corner/a380x/a380x-advanced-guides/overview/' },
    },
    {
        description: 'We have created our very own standard operating procedures (SOP) and checklists valid for the A380X.',
        button: { label: 'SOP and Checklist', theme: 'primary' as const, link: 'http://docs.flybywiresim.com/pilots-corner/a380x/a380x-sop' },
    },
    {
        description: 'Explore an interactive overview of the A380\'s flight deck. Hover over elements to see their descriptions and click for more details.',
        button: { label: 'Pilot Briefing', theme: 'primary' as const, link: 'http://docs.flybywiresim.com/pilots-corner/a380x/a380x-briefing/' },
    },
];

const A380X: NextPage = () => (
    <>
        <Head>
            <title>A380X - FlyByWire Simulations</title>
        </Head>
        <ProjectHero
            projectHeading="FlyByWire Simulations"
            projectTitle="A380"
            projectDescription="Open source and free to fly, the A380X is the first high-fidelity simulation of the world's largest passenger airliner for Microsoft Flight Simulator."
            poster="/img/notam-images/a380x/a380x-takeoff.jpg"
            buttons={[
                { label: 'Download', theme: 'primary' as const, link: 'http://api.flybywiresim.com/installer' },
                { label: 'Learn More', theme: 'secondary' as const, onClick: () => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' }) },
            ]}
        />
        {/* Features Section */}
        <Section id="features-section" className="relative" theme="light">
            <BackgroundImage />
            <Container className="gap-6">
                <div>
                    <h2>Discover the A380X</h2>
                </div>
                <FeatureCarousel theme="light">
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
                        imageSrc="/img/notam-images/a380x/a380-notam-media-1.png"
                        imageAlt="A380X exterior view"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
                </FeatureCarousel>
            </Container>
        </Section>
        {/* Tutorials and Documentation Section */}
        <ResourcesSection
            title="Tutorials and Documentation"
            description="Each page of our documentation has been reviewed by an A380 type rated pilot and provides accurate and in-depth information on aircraft operations."
            resources={tutorialResources}
        />
        {/* Gallery Section */}
        <Section theme="light">
            <Container className="gap-0 md:gap-6">
                <h2>Gallery</h2>
                <GalleryCarousel theme="light">
                    <ScreenshotTile
                        imageSrc="/pages/projects/a380x/a380Project.png"
                        imageAlt="A380X exterior view"
                    />
                    <ScreenshotTile
                        imageSrc="/img/notam-images/a380x/a380-notam-media-1.png"
                        imageAlt="A380X cockpit view"
                    />
                    <ScreenshotTile
                        imageSrc="/img/notam-images/a380x/a380-notam-media-2.png"
                        imageAlt="A380X wing view"
                    />
                </GalleryCarousel>
            </Container>
        </Section>
        {/* Trailer Section */}
        <VideoSection videoId="F0WhrKD2ni0" title="Trailer" theme="dark" />
        {/* Download Section */}
        <DownloadSection
            heading="Available For Free"
            description={
                'Get started by downloading the FlyByWire Installer for a hassle-free setup and effortless updates. '
                + 'With the A380X constantly evolving with new features and improvements, the installer ensures '
                + 'you\'ll always be flying the latest version. Prefer to download manually? Direct downloads have also been made available.'
            }
            buttons={[
                { label: 'Direct Downloads', theme: 'secondary' as const, link: '/downloads' },
                { label: 'Download Installer', theme: 'primary' as const, link: 'http://api.flybywiresim.com/installer' },
                { label: 'Installation Guide', theme: 'secondary' as const, link: 'http://docs.flybywiresim.com/aircraft/install/installation/' },
            ]}
        />
        {/* System Requirements Section */}
        <SystemRequirementsSection
            project="A380X"
            theme="dark"
            minimumCPU="Intel i5-4460 or Ryzen 3 1400"
            minimumGPU="Nvidia GTX 1060 6GB or AMD RX 480 8GB"
            minimumMemory="8GB"
            minimumStorage="28GB* free space (HDD or SSD)"
            minimumNotice="At least 4-8GB needed for virtual memory"
            recommendedCPU="Intel i5-8400 or Ryzen 5 3600"
            recommendedGPU="Nvidia RTX 3060 12GB or AMD RX 6600 XT 8GB"
            recommendedMemory="16GB"
            recommendedStorage="20GB free space (SSD)"
            flyingByWireCPU="Ryzen 7 7800X3D"
            flyingByWireGPU="RTX 4080 Super 16GB or 7900 XTX 24GB"
            flyingByWireMemory="32GB"
            flyingByWireStorage="20GB free space (SSD)"
        />
    </>
);

export default A380X;
