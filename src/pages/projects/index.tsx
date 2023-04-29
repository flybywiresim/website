import Head from 'next/head';
import { NextPage } from 'next';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Card from '../../components/Projects/Card';

const A32NX_DOWNLOAD_URL = 'https://github.com/flybywiresim/a32nx/releases/download/assets/master/A32NX-master.zip';

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
                <div className="my-4 grid gap-4 md:grid-cols-2">
                    <Card
                        metaImage="/img/a32nxwing.png"
                        metaAlt="A32NX"
                        title="A32NX"
                        category="Aircraft"
                        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                        downloadURL={A32NX_DOWNLOAD_URL}
                        href="/projects/a32nx"
                    />
                    <Card
                        metaImage="/img/a32nxwing.png"
                        metaAlt="A380X"
                        title="A380X"
                        category="Aircraft"
                        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                        downloadURL={A32NX_DOWNLOAD_URL}
                        href="/projects/a380x"
                    />
                    <Card
                        metaImage="/img/a32nxwing.png"
                        metaAlt="Installer"
                        title="Installer"
                        category="Software"
                        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                        downloadURL={A32NX_DOWNLOAD_URL}
                        href="/projects/installer"
                    />
                    <Card
                        metaImage="/img/a32nxwing.png"
                        metaAlt="EFB"
                        title="EFB"
                        category="Software"
                        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                        href="/projects/efb"
                    />
                </div>
            </Container>
        </Section>
    </>
);

export default index;
