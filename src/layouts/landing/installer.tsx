import Image from 'next/image';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';

const installer = () => (
    <Section theme="dark" className="grid gap-y-20 bg-gradient-to-r from-transparent to-secondary-accent/50 py-20">
        <Container className="grid gap-y-5">
            <h2>Custom-built Installer</h2>
            <p>
                Our custom-built, open-source installer is where we keep our projects for you to easily install.
            </p>
            <Button label="Download" theme="primary" />
        </Container>

        {/* TODO: Change placeholder image */}
        <div className="-mb-32">
            <Image src="/img/installerPreview.png" layout="intrinsic" width={1920} height={1080} />
        </div>
    </Section>
);

export default installer;
