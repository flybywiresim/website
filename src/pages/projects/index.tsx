import Head from 'next/head';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Card from '../../components/Projects/Card';

const A32NX_DOWNLOAD_URL = 'https://github.com/flybywiresim/a32nx/releases/download/assets/master/A32NX-master.zip';

const index = () => (
    <>
        <Head>
            <title>Our Projects - FlyByWire Simulations</title>
        </Head>
        <Section theme="dark">
            <Container>
                <h2>Our Projects</h2>

                <div className="my-4 grid grid-cols-1 gap-4">
                    <Card
                        metaImage="/img/a32nxwing.png"
                        metaAlt="A32NX"
                        title="A32NX"
                        category="Aircraft"
                        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                        downloadURL={A32NX_DOWNLOAD_URL}
                        href="/projects/a32nx"
                    />
                </div>
            </Container>
        </Section>
    </>
);

export default index;
