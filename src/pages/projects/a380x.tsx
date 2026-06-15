import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';
import {
    FeatureGrid,
    TileSection,
    TextTileSmall,
    TextTileLarge,
    ImageTile,
    VectorTile,
} from '../../components/FeatureGrid';

const A380X: NextPage = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>A380X - FlyByWire Simulations</title>
            </Head>
            <Section theme="dark">
                <Container>
                    <h4>Discover the</h4>
                    <h1>A380X</h1>
                    <p>Experience flying the world's largest passenger airliner. The A380X is a community-driven project for Microsoft Flight Simulator.</p>

                    <div className="py-8">
                        <Button label="Download" theme="primary" onClick={() => router.push('/downloads')} />
                    </div>
                </Container>
            </Section>

            {/* Feature Grid Section */}
            <Section theme="light">
                <Container>
                    <h2 className="mb-8">Features</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <TileSection ratio="2:1">
                                <ImageTile
                                    text="Cockpit Overview"
                                    imageSrc="/pages/projects/a32nx/Avionics.png"
                                />
                            </TileSection>
                            <TileSection direction="col" ratio="2:1">
                                <TextTileSmall text="Custom FMS" />
                                <TextTileSmall text="OANS" />
                            </TileSection>
                            <TileSection ratio="1:1">
                                <TextTileLarge text="Advanced Systems"/>
                            </TileSection>
                            <TileSection ratio="1:1">
                                <ImageTile
                                    text="Cockpit Overview"
                                    imageSrc="/pages/projects/a32nx/Avionics.png"
                                />
                            </TileSection>
                        </div>
                        <div className="flex gap-4">
                            <TileSection ratio="3:1">
                                <ImageTile
                                    text="Cockpit Overview"
                                    imageSrc="/pages/projects/a32nx/Avionics.png"
                                />
                            </TileSection>
                            <TileSection direction="col" ratio="3:1">
                                <TextTileSmall text="Custom FMS" />
                                <TextTileSmall text="OANS" />
                            </TileSection>
                            <TileSection ratio="1:1">
                                <TextTileLarge text="Advanced Systems"/>
                            </TileSection>
                            <TileSection ratio="1:1">
                                <ImageTile
                                    text="Cockpit Overview"
                                    imageSrc="/pages/projects/a32nx/Avionics.png"
                                />
                            </TileSection>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section theme="dark">
                <Container>
                    <h2>Get it</h2>
                    <p>Join our community and contribute to the A380X project. Your support helps us make the best experience possible.</p>
                    <Button label="Download" theme="primary" onClick={() => router.push('/community')} />
                </Container>
            </Section>
        </>
    );
};

export default A380X;
