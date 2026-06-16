import { ReactNode } from 'react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import Section from '../Utils/Section';
import Container from '../Utils/Container';
import Button from '../Button/Button';

interface ProjectHeroProps {
    projectTitle: string;
    projectDescription: string;
}

const BackgroundImage = () => (
    <div className="absolute left-0 top-0 -z-10 h-screen w-screen opacity-90">
        <Image src="/pages/index/bg.png" layout="fill" objectFit="cover" />
    </div>
);

const ButtonGroup = (props: {children: ReactNode}) => (
    <ul className="my-4 flex gap-4 justify-center">
        {props.children}
    </ul>
);

const Hero = (props: ProjectHeroProps) => {
    const router = useRouter();

    const strokeStyle: React.CSSProperties = {
        WebkitTextStroke: '3px var(--color-brand-cyan-main)',
        color: 'transparent',
    };

    return (
        <Section className="flex h-screen flex-col justify-center bg-black/50 bg-gradient-to-bl from-primary/30 to-secondary">
            <BackgroundImage />
            <Container className="h-144 justify-center" display="flex flex-col">
                <div className="mx-auto max-w-prose text-center">
                    <h4 className="font-normal leading-4 text-primary">FlyByWire Simulations</h4>
                    <div className="inline-flex items-baseline">
                        <h1 className="text-white uppercase">{props.projectTitle}</h1>
                        <h1 style={{ ...strokeStyle, '-webkit-text-stroke-shrink': 1 } as any}>X</h1>
                    </div>
                    <p className="max-w-xl">
                        {props.projectDescription}
                    </p>
                    <ButtonGroup>
                        <Button label="Download" theme="primary" onClick={() => router.push('/downloads')} />
                        <Button label="Learn More" theme="secondary" />
                    </ButtonGroup>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
