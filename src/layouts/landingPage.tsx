import { ReactNode } from 'react';
import Image from 'next/image';
import Section from '../components/Utils/Section';
import Container from '../components/Utils/Container';
import Button from '../components/Button/Button';

const BackgroundImage = () => (
    <div className="absolute -z-10 h-screen w-screen opacity-90">
        <Image src="/img/bg.png" layout="fill" objectFit="cover" />
    </div>
);

const ButtonGroup = (props: {children: ReactNode}) => (
    <ul className="my-4 grid grid-cols-2 gap-4">
        {props.children}
    </ul>
);

const LandingPage = () => (
    <>
        <Section theme="dark" className="relative bg-dark/75 bg-gradient-to-bl from-primary/30 to-transparent">
            <BackgroundImage />
            <Container className="h-screen" center>
                <h4 className="font-normal leading-4 text-primary">FlyByWire Simulations</h4>
                <h1>A32NX</h1>
                <p className="max-w-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alternation in some form, by injected humor...</p>
                <ButtonGroup>
                    <Button label="Download" theme="primary" />
                    <Button label="More Info" theme="secondary" />
                </ButtonGroup>
            </Container>
        </Section>
    </>
);

export default LandingPage;
