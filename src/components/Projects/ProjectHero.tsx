import { ReactNode, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Section from '../Utils/Section';
import Container from '../Utils/Container';
import Button from '../Button/Button';

interface ButtonConfig {
    label: string;
    theme: 'primary' | 'secondary' | 'positive' | 'caution' | 'danger' | 'discord';
    link?: string;
    onClick?: () => void;
}

interface ProjectHeroProps {
    projectHeading?: string;
    projectSubheading?: string;
    projectTitle?: string;
    projectDescription: string;
    buttons?: ButtonConfig[];
    fullHeight?: boolean;
    videoSrc?: string;
    poster?: string;
    backgroundSrc?: string;
}

const VideoBackground = (props: { videoSrc?: string; poster?: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    }, []);

    const webmSrc = props.videoSrc ? `${props.videoSrc}.webm` : undefined;
    const mp4Src = props.videoSrc ? `${props.videoSrc}.mp4` : undefined;

    if (!webmSrc && !mp4Src && !props.poster) {
        return null;
    }

    if (!webmSrc && !mp4Src) {
        return (
            <img
                src={props.poster}
                alt="Background"
                className="absolute left-0 top-0 -z-10 h-screen w-screen object-cover opacity-90"
            />
        );
    }

    return (
        <div className="absolute left-0 top-0 -z-10 h-screen w-screen overflow-hidden">
            <video
                ref={videoRef}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster={props.poster}
                preload="auto"
                aria-hidden="true"
            >
                {webmSrc && <source src={webmSrc} type="video/webm" />}
                {mp4Src && <source src={mp4Src} type="video/mp4" />}
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
    const router = useRouter();
    const { fullHeight = false } = props;

    const strokeStyle: React.CSSProperties = {
        WebkitTextStroke: '3px var(--color-brand-cyan-main)',
        color: 'transparent',
    };

    const defaultButtons: ButtonConfig[] = [
        { label: 'Download', theme: 'primary', onClick: () => router.push('/downloads') },
        { label: 'Learn More', theme: 'secondary' },
    ];

    const buttons = props.buttons ?? defaultButtons;

    const handleButtonClick = (button: ButtonConfig) => {
        if (button.onClick) {
            button.onClick();
        } else if (button.link) {
            router.push(button.link);
        }
    };

    return (
        <Section className={`relative flex ${fullHeight ? 'h-screen' : ''} flex-col justify-center bg-black/50 bg-gradient-to-bl from-primary/30 to-secondary`}>
            {props.backgroundSrc && (
                <img
                    src={props.backgroundSrc}
                    alt="Background"
                    className="absolute left-0 top-0 -z-10 h-screen w-screen object-cover opacity-90"
                />
            )}
            {props.videoSrc && (
                <VideoBackground videoSrc={props.videoSrc} poster={props.poster} />
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
                                label={button.label}
                                theme={button.theme}
                                onClick={() => handleButtonClick(button)}
                            />
                        ))}
                    </ButtonGroup>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
