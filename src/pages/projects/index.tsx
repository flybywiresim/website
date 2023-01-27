import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Card from '../../components/Projects/Card';

const index = () => (
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
                    isDownloadable
                />
                <Card
                    metaImage="/img/a32nxwing.png"
                    metaAlt="A32NX"
                    title="A380X"
                    category="Aircraft"
                    description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                    isDownloadable
                />
                <Card
                    metaImage="/img/a32nxwing.png"
                    metaAlt="A32NX"
                    title="Installer"
                    category="Software"
                    description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                    isDownloadable
                />
                <Card
                    metaImage="/img/a32nxwing.png"
                    metaAlt="A32NX"
                    title="EFB"
                    category="Software"
                    description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                />

            </div>
        </Container>
    </Section>
);

export default index;
