import { ReactNode, useEffect, useRef } from 'react';
import Section from '../Utils/Section';
import Container from '../Utils/Container';
import Button from '../Button/Button';

interface ButtonConfig {
    label: string;
    theme: 'primary' | 'secondary' | 'positive' | 'caution' | 'danger' | 'discord';
    link?: string;
    onClick?: () => void;
    target?: '_blank' | '_parent' | '_self' | '_top';
    rel?: string;
}

interface ProjectHeroProps {
    projectHeading?: string;
    projectSubheading?: string;
    projectTitle?: string;
    projectDescription: string;
    buttons?: ButtonConfig[];
    HeroVideo?: string;
    HeroVideoFallback?: string;
    HeroVideoPoster?: string;
    backgroundSrc?: string;
}

const VideoBackground = (props: { HeroVideo?: string; HeroVideoFallback?: string; HeroVideoPoster?: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    }, []);

    if (!props.HeroVideo && !props.HeroVideoFallback && !props.HeroVideoPoster) {
        return null;
    }

    if (!props.HeroVideo && !props.HeroVideoFallback) {
        return (
            <img
                src={props.HeroVideoPoster}
                alt="Background"
                className="absolute -z-10 h-screen w-screen object-cover"
            />
        );
    }

    return (
        <div className="absolute -z-10 h-screen w-screen">
            <video
                ref={videoRef}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster={props.HeroVideoPoster}
                preload="auto"
                aria-hidden="true"
            >
                {props.HeroVideo && <source src={props.HeroVideo} type="video/webm" />}
                {props.HeroVideoFallback && <source src={props.HeroVideoFallback} type="video/mp4" />}
            </video>
        </div>
    );
};

const ButtonGroup = (props: {children: ReactNode}) => (
    <ul className="my-4 flex gap-4 justify-center">
        {props.children}
    </ul>
);

const Hero = (props: ProjectHeroProps) => {
    const strokeStyle: React.CSSProperties = {
        WebkitTextStroke: '3px var(--color-brand-cyan-main)',
        color: 'transparent',
    };

    const defaultButtons: ButtonConfig[] = [
        { label: 'Download', theme: 'primary', link: '/downloads' },
        { label: 'Learn More', theme: 'secondary' },
    ];

    const buttons = props.buttons ?? defaultButtons;

    return (
        <Section className="relative flex flex-col justify-center bg-black/50 bg-gradient-to-bl from-primary/30 to-secondary">
            {props.backgroundSrc && (
                <img
                    src={props.backgroundSrc}
                    alt="Background"
                    className="absolute -z-10 h-screen w-screen object-cover"
                />
            )}
            {(props.HeroVideo || props.HeroVideoFallback || props.HeroVideoPoster) && (
                <VideoBackground HeroVideo={props.HeroVideo} HeroVideoFallback={props.HeroVideoFallback} HeroVideoPoster={props.HeroVideoPoster} />
            )}
            <Container className="h-144 justify-center" display="flex flex-col">
                <div className="mx-auto max-w-prose text-center">
                    {props.projectHeading && (
                        <h4 className="font-normal leading-4 text-primary">{props.projectHeading}</h4>
                    )}
                    {props.projectSubheading && (
                        <h2 className="mb-6 font-semibold text-white">{props.projectSubheading}</h2>
                    )}
                    {props.projectTitle && (
                        <div className="inline-flex items-baseline">
                            <h1 className="text-white uppercase">{props.projectTitle}</h1>
                            <h1 style={{ ...strokeStyle, '-webkit-text-stroke-shrink': 1 } as any}>X</h1>
                        </div>
                    )}
                    <p className="max-w-xl">
                        {props.projectDescription}
                    </p>
                    <ButtonGroup>
                        {buttons.map((button, index) => (
                            <Button
                                key={index}
                                theme={button.theme}
                                link={button.link}
                                onClick={button.onClick}
                                target={button.target}
                                rel={button.rel}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
