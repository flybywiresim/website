import { ReactNode } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';

const BackgroundImage = () => (
    <div className="absolute top-0 left-0 -z-10 h-screen w-screen opacity-90">
        <Image src="/pages/index/bg.png" layout="fill" objectFit="cover" />
    </div>
);

const ButtonGroup = (props: {children: ReactNode}) => (
    <ul className="my-4 flex gap-4">
        {props.children}
    </ul>
);

const Hero = () => {
    const router = useRouter();

    return (
        <>
            <Section className="h-screen bg-black/50 bg-gradient-to-bl from-primary/30 to-secondary">
                <BackgroundImage />
                <Container className="h-144 justify-center" display="flex flex-col">
                    <div className="max-w-prose">
                        <h4 className="font-normal leading-4 text-primary">FlyByWire Simulations</h4>
                        <h1>A32NX</h1>
                        <p className="max-w-xl">
                            The leading free and open-source community aiming for high fidelity aircraft in Microsoft Flight Simulator,
                            fly with our in-depth systems or put your skills to the test by contributing to the project.
                        </p>
                        <ButtonGroup>
                            <Button label="Download" theme="primary" />
                            <Button label="More Info" theme="secondary" onClick={() => router.push('/projects/a32nx')} />
                        </ButtonGroup>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Hero;
