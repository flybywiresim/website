import Image from 'next/image';
import Head from 'next/head';
import { NextPage, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { generateLQIPMap } from '../../lib/lqip';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import ProjectHero from '../../components/Projects/ProjectHero';
import FeatureCarousel from '../../components/Projects/Carousel/FeatureCarousel';
import GalleryCarousel from '../../components/Projects/Carousel/GalleryCarousel';
import FinaleTile from '../../components/Projects/Carousel/FinaleTile';
import ImageTile from '../../components/Projects/Carousel/ImageTile';
import GalleryTile from '../../components/Projects/Carousel/GalleryTile';
import WatermarkTile from '../../components/Projects/Carousel/WatermarkTile';
import VideoSection from '../../components/Projects/VideoSection';
import SystemRequirementsSection from '../../components/Projects/SystemRequirementsSection';
import ResourcesSection from '../../components/Projects/ResourcesSection';
import DownloadSection from '../../components/Projects/DownloadSection';

const BackgroundImage = ({ blurDataURL }: { blurDataURL?: string }) => (
    <div className="absolute inset-0 h-full w-screen opacity-5 pointer-events-none">
        <Image
            src="/pages/index/Airfoil.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            quality={50}
            placeholder="blur"
            blurDataURL={blurDataURL}
        />
    </div>
);

type A380XProps = {
    galleryImages: number[];
    blurDataURLs: Record<string, string>;
};

const A380X: NextPage<A380XProps> = ({ galleryImages, blurDataURLs }) => (
    <>
        <Head>
            <title>A380X - FlyByWire Simulations</title>
        </Head>
        {/* Hero Section */}
        <ProjectHero
            projectHeading="FlyByWire Simulations"
            projectTitle="A380"
            projectDescription="Open source and free to fly, the A380X is the first high-fidelity simulation of the world's largest passenger airliner for Microsoft Flight Simulator."
            HeroVideo="/videos/a380x/a380x_showcase_video.webm"
            HeroVideoFallback="/videos/a380x/a380x_showcase_video.mp4"
            HeroVideoPoster="/videos/a380x/a380x_showcase_poster.jpg"
            buttons={[
                { label: 'Download', theme: 'primary' as const, link: 'http://api.flybywiresim.com/installer' },
                { label: 'Learn More', theme: 'secondary' as const, onClick: () => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' }) },
            ]}
        />
        {/* Features Section */}
        <Section id="features-section" className="relative overflow-hidden" theme="light">
            <Container className="gap-6">
                <div>
                    <h2>Discover the A380X</h2>
                </div>
                <FeatureCarousel theme="light">
                    <WatermarkTile
                        title="King of the Skies"
                        imageSrc="/img/a380x/feature-a380x-takeoff.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-a380x-takeoff.webp']}
                        imageAlt=""
                        watermarkText="A380X"
                        description={
                            'The A380 is an engineering icon. As the world\'s largest passenger airliner, the aircraft features a full-length double deck, a wingspan of 79.8 meters, '
                            + 'a 575-tonne maximum takeoff weight, and an ability to accommodate well over 500 passengers in comfort around the world.'
                        }
                    />
                    <ImageTile
                        title="An Advanced Avionics Suite"
                        imageSrc="/img/a380x/feature-avionics-suite.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-avionics-suite.webp']}
                        imageAlt="A close-up of the Primary Flying Display (PFD) with the Navigation Display (ND) in the background."
                        description={
                            'The A380X\'s flightdeck features six integrated displays; the PFD, ND, EWD, SD, MFD, and OIT. '
                            + 'Each display has been meticulously reproduced based on real-world reference material '
                            + 'and are rendered with colour-accurate, resource-efficient vector graphics.'
                        }
                    />
                    <ImageTile
                        title="Next-Generation Flight Management"
                        imageSrc="/img/a380x/feature-fms.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-fms.webp']}
                        imageAlt="A close-up of the Multi-Function Display (MFD) on the F-PLN page."
                        description={
                            'The A380X\'s flight management system is built on FlyByWire\'s fms-v2 architecture, delivering accurate VNAV vertical guidance, ARINC 424 leg type support, '
                            + 'and a 17-page MFD that integrates holdings, missed approaches, and diversions.'
                        }
                    />
                    <WatermarkTile
                        title="Electronic Centralised Aircraft Monitor (ECAM)"
                        watermarkText="ECAM"
                        imageSrc="/img/a380x/feature-ecam.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-ecam.webp']}
                        imageAlt="A graphic of the TAXI checklist on the Electronic Centralised Aircraft Monitor (ECAM) display."
                        description={
                            'The A380\'s sophisticated ECAM system is faithfully reproduced, with 256 abnormal procedures spanning 246 sensed faults, '
                            + '10 non-sensed procedures accessible via the ABN PROC button, and 5 deferred procedures. '
                            + 'Alongside these sit 132 MEMOs, 107 INOP SYS items, and 14 normal checklists.'
                        }
                    />
                    <ImageTile
                        title="Onboard Airport Navigation System (OANS)"
                        imageSrc="/img/a380x/feature-oans.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-oans.webp']}
                        imageAlt="A close-up of the Onboard Airport Navigation System (OANS) with the aircraft lined up on runway 30R."
                        description={
                            'The A380X\'s OANS display renders an interactive airport map with RWY AHEAD advisory, ZOOM ranges, Brake-to-Vacate (BTV), flags/crosses integration, '
                            + 'and runway overrun warning and protection (ROW/ROP). A Navigraph Unlimited subscription is required.'
                        }
                    />
                    <WatermarkTile
                        title="Flight Warning System (FWS) & Emergency Procedures"
                        watermarkText="FWS & EMER PROC "
                        imageSrc="/img/a380x/feature-fws-emer-proc.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-fws-emer-proc.webp']}
                        imageAlt="A graphic of the FIRE SMOKE/FUMES Abnormal Procedure (ABN PROC) checklist."
                        description={
                            'Beyond normal ECAM faults, the FWS includes non-sensed emergency procedures such as EMER DESCENT and EMER EVAC, accessible via the ABN PROC button, '
                            + 'matching the real crew response workflow when the aircraft cannot detect abnormalities automatically.'
                        }
                    />
                    <ImageTile
                        title="Fly-By-Wire Flight Controls"
                        imageSrc="/img/a380x/feature-fly-by-wire-controls.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-fly-by-wire-controls.webp']}
                        imageAlt="A close-up of the captain's side-stick."
                        description={
                            'The A380\'s fully fly-by-wire control law architecture is modelled in depth, including accurate flap load relief, hydraulic and electronic surface actuation, '
                            + 'and triple aileron operation on each wing that produces the iconic \'Valse Des Ailerons\' aileron dance.'
                        }
                    />
                    <WatermarkTile
                        title="Fuel, Hydraulics & Electrical Systems"
                        imageSrc="/img/a380x/feature-systems.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-systems.webp']}
                        imageAlt="Multiple graphics of various displays on the System Display (SD), including electrical, fuel, and hydraulics."
                        watermarkText="Systems"
                        description={
                            'Automatic CG-based fuel transfers, trim tank management, and crossfeed logic bring the complex fuel system to life. '
                            + 'A twin-circuit Green/Yellow hydraulic architecture drives gear, doors, and flight controls, '
                            + 'a signature departure from the three-system setup on other Airbus aircraft. This is all backed by a detailed electrical AC/DC system model.'
                        }
                    />
                    <ImageTile
                        title="An Immersive 3D Environment"
                        imageSrc="/img/a380x/feature-environment.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-environment.webp']}
                        imageAlt="A close-up of the Auto Flight System (AFS) Control Panel, demonstrating the texture work."
                        description={
                            'From the shape of its distinctive fuselage to individual screws in the flightdeck, each 3D asset has been meticulously crafted '
                            + 'to produce an immersive environment that truly captures the essense of the world\'s largest commercial airliner.'
                        }
                    />
                    <WatermarkTile
                        title="Custom Soundscape"
                        imageSrc="/img/a380x/feature-sounds.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-sounds.webp']}
                        imageAlt="An image of the A380X's massive engines with a soundwave graphic overlaid on top."
                        watermarkText="Sounds"
                        description={
                            'Every sound in the A380X has been produced from scratch, capturing the superjumbo\'s unique acoustic personality. From the famous sounds of the flaps extending, '
                            + 'to the four Rolls-Royce Trent 972B-84s building up to a commanding roar, the A380X sounds as alive as it looks.'
                        }
                    />
                    <ImageTile
                        title="Physically-Simulated Wing Flex"
                        imageSrc="/img/a380x/feature-wing-flex.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-wing-flex.webp']}
                        imageAlt="An image of the A380X rotating into the air, with a focus on the aircraft's wing flex as it achieves lift."
                        description={
                            'The A380\'s characteristic wing flex has been modelled as a soft-body system, with wings responding dynamically to fuel load and G-forces, '
                            + 'including the natural upward tip bend visible during high-load maneuvers and in cruise.'
                        }
                    />
                    <WatermarkTile
                        title="Vertical Display (VD) and Terrain Radar"
                        description={
                            'From climb to managed descent, a precise vertical profile respecting altitude and speed constraints at each waypoint is computed by the FMS. '
                            + 'It is drawn live on the Vertical Display with a SimBridge-enabled terrain radar overlaid on both the ND and VD. '
                            + 'Three independently simulated radio altimeters feed a full GPWS suite, triggering aural warnings and visual PFD alerts.'
                        }
                        imageSrc="/svg/feature/TerrainDisplay.svg"
                        blurDataURL={blurDataURLs['/svg/feature/TerrainDisplay.svg']}
                        imageAlt="A graphic of the Vertical Display and Terrain Radar."
                        watermarkText="VNAV"
                    />
                    <ImageTile
                        title="flyPadOS v3 EFB"
                        imageSrc="/img/a380x/feature-flypadOS.webp"
                        blurDataURL={blurDataURLs['/img/a380x/feature-flypadOS.webp']}
                        imageAlt="An image of the onboard Electronic Flight Bag (EFB) running FlyByWire's flyPadOS."
                        description={
                            'The A380X features FlyByWire\'s flyPadOS Electronic Flight Bag, which handles throttle calibration for 1/2/4-axis hardware, '
                            + 'A380-specific payload across four cabin classes, a dynamic CG and payload chart, GSX cargo and passenger sync with ULD support, '
                            + 'multi-airstair boarding, and simrate control. All from a modern, purpose-built interface.'
                        }
                    />
                    <FinaleTile
                        title="...and much more!"
                        features={[
                            'Community Support',
                            'Hoppie Integration',
                            'SimBridge',
                            'Modelled Cabin',
                            'GSX Integration',
                            'FlyByWire Installer',
                            'Heading Control Function (HCF)',
                            'Cabinless Variant',
                            'Physically-Simulated Brake Temps',
                            'Fix Info',
                        ]}
                    />
                </FeatureCarousel>
            </Container>
        </Section>
        {/* Tutorials and Documentation Section */}
        <Section className="relative" theme="dark">
            <BackgroundImage blurDataURL={blurDataURLs['/pages/index/Airfoil.png']} />
            <Container>
                <ResourcesSection
                    title="Tutorials and Documentation"
                    description="Each page of our documentation has been reviewed by an A380 type rated pilot and provides accurate and in-depth information on aircraft operations."
                    resources={[
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
                    ]}
                />
            </Container>
        </Section>
        {/* Gallery Section */}
        <Section theme="light" className="overflow-hidden">
            <Container className="gap-4">
                <h2>Gallery</h2>
                <GalleryCarousel theme="light">
                    {galleryImages.map((id) => {
                        const src = `/img/a380x/gallery-${id}.webp`;
                        return (
                            <GalleryTile
                                key={id}
                                imageSrc={src}
                                blurDataURL={blurDataURLs[src]}
                                imageAlt={`A380X gallery image ${id}`}
                            />
                        );
                    })}
                </GalleryCarousel>
            </Container>
        </Section>
        {/* Trailer Section */}
        <Section theme="dark">
            <Container>
                <VideoSection videoId="F0WhrKD2ni0" title="Trailer" theme="dark" />
            </Container>
        </Section>
        {/* Download Section */}
        <DownloadSection
            heading="Available For Free"
            description={
                'Get started by downloading the FlyByWire Installer! '
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
        <Section className="relative" theme="dark">
            <BackgroundImage blurDataURL={blurDataURLs['/pages/index/Airfoil.png']} />
            <Container>
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
                    disclaimer="Please note that these system requirements are based on the v0.10 open-alpha release and are subject to change as the project evolves."
                />
            </Container>
        </Section>
    </>
);

export default A380X;

const FEATURE_IMAGE_PATHS = [
    '/img/a380x/feature-a380x-takeoff.webp',
    '/img/a380x/feature-avionics-suite.webp',
    '/img/a380x/feature-fms.webp',
    '/img/a380x/feature-ecam.webp',
    '/img/a380x/feature-oans.webp',
    '/img/a380x/feature-fws-emer-proc.webp',
    '/img/a380x/feature-fly-by-wire-controls.webp',
    '/img/a380x/feature-systems.webp',
    '/img/a380x/feature-environment.webp',
    '/img/a380x/feature-sounds.webp',
    '/img/a380x/feature-wing-flex.webp',
    '/svg/feature/TerrainDisplay.svg',
    '/img/a380x/feature-flypadOS.webp',
];

const BACKGROUND_IMAGE_PATH = '/pages/index/Airfoil.png';

export const getStaticProps: GetStaticProps<A380XProps> = async () => {
    const publicDir = path.join(process.cwd(), 'public', 'img', 'a380x');
    const files = fs.readdirSync(publicDir);

    const galleryImages = files
        .filter((file) => file.startsWith('gallery-') && file.endsWith('.webp'))
        .map((file) => {
            const match = file.match(/^gallery-(\d+)\.webp$/);
            return match ? parseInt(match[1], 10) : null;
        })
        .filter((id): id is number => id !== null)
        .sort((a, b) => a - b);

    const galleryPaths = galleryImages.map((id) => `/img/a380x/gallery-${id}.webp`);
    const blurDataURLs = await generateLQIPMap([
        ...FEATURE_IMAGE_PATHS,
        BACKGROUND_IMAGE_PATH,
        ...galleryPaths,
    ]);

    return { props: { galleryImages, blurDataURLs } };
};
