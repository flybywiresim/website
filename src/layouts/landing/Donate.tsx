import Image from 'next/image';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';

const BackgroundImage = () => (
    <div className="h-full w-screen opacity-3">
        <Image src="/pages/index/Airfoil.png" layout="fill" objectFit="cover" />
    </div>
);

const Donate = () => (
    <Section className="relative h-full w-screen bg-dark">
        <BackgroundImage />
        <Container className="relative h-full items-center justify-center gap-y-5" display="flex flex-col">
            <h2 className="text-primary">Donate</h2>
            <p>
                Contributions allow FlyByWire Simulations to provide better services for our users,
                such as fast and reliable download networks and integrated online features to enrich your flight simulation experience.
            </p>
            <p>We use Open Collective to transparently manage our donations and expenses, which means you can see how we utilize donated funds at any time.</p>
            <Button label="Donate" theme="primary" />
            <small className="opacity-75">*No profit is generated from donations. Donating does not guarantee access to additional content nor its exclusivity.</small>
        </Container>
    </Section>
);

export default Donate;
