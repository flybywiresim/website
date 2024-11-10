import Head from 'next/head';
import { NextPage } from 'next';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Card from '../../components/Projects/Card';
import { links } from '../../constants/links';

const index: NextPage = () => (
    <>
        <Head>
            <title>Our Projects - FlyByWire Simulations</title>
            <meta
                key="og:title"
                name="og:title"
                content="Our Projects - FlyByWire Simulations"
            />
        </Head>
        <Section theme="dark">
            <Container>
                <h2>Our Projects</h2>
                <div className="my-4 grid gap-4 lg:grid-cols-2">
                    <Card
                        metaImage="/img/rear_a32nx.jpg"
                        metaAlt="A32NX"
                        title="A32NX"
                        category="Aircraft"
                        description="The A32NX is a high fidelity and free solution for Microsoft Flight Simulator, built and maintained by the open source community."
                        downloadURL="/downloads"
                        direction="vertical"
                    />
                    <Card
                        metaImage="/pages/projects/a380x/a380Project.png"
                        metaAlt="A380X"
                        title="A380X"
                        category="Aircraft"
                        description="The A380X is the upcoming first high fidelity and free simulation of the A380 for Microsoft Flight Simulator."
                        downloadURL="/downloads"
                        direction="vertical"
                    />
                    <Card
                        title="Installer"
                        category="Software"
                        description="Our custom-built, open-source installer is where we keep our projects for you to easily install."
                        downloadURL="/downloads"
                        direction="horizontal"
                    />
                    <Card
                        title="EFB"
                        category="Software"
                        description="The Electronic Flight Bag is an integrated tablet with a wide array of tools, settings and more."
                        href={links.efb}
                        direction="horizontal"
                    />
                </div>
            </Container>
        </Section>
    </>
);

export default index;
