import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Section from '../Utils/Section';
import Container from '../Utils/Container';
import Button from '../Button/Button';
import useScrollReveal from '../../hooks/useScrollReveal';

interface ButtonConfig {
    label: string;
    theme: 'primary' | 'secondary' | 'positive' | 'caution' | 'danger' | 'discord';
    link?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    rel?: string;
}

interface DownloadSectionProps {
    heading?: string;
    description: string;
    buttons?: ButtonConfig[];
}

const ButtonGroup = (props: { children: ReactNode }) => (
    <ul className="flex flex-col md:flex-row gap-4 justify-center mt-2 items-center">
        {props.children}
    </ul>
);

const DownloadSectionComponent = ({
    heading,
    description,
    buttons,
}: DownloadSectionProps) => {
    const { ref, revealed, shouldAnimate } = useScrollReveal<HTMLDivElement>();

    const defaultButtons: ButtonConfig[] = [
        { label: 'Direct Downloads', theme: 'secondary' },
        { label: 'Download Installer', theme: 'primary', link: '/community' },
        { label: 'Installation Guide', theme: 'secondary' },
    ];

    const buttonsToRender = buttons ?? defaultButtons;

    return (
        <Section className="relative flex flex-col justify-center !py-32">
            <Container className="text-center justify-center gap-10">
                <div ref={ref} className="flex flex-col items-center gap-10">
                    {heading && (
                        <div className="flex flex-col items-center gap-4">
                            <h2 className={twMerge('font-bold text-secondary', !revealed && 'motion-safe:opacity-0', shouldAnimate && 'reveal-fade-in')}>
                                <span className={twMerge('inline-block', shouldAnimate && 'shimmer-once')}>{heading}</span>
                            </h2>
                            <span
                                className={twMerge('block h-1 w-16 rounded-full', !revealed && 'motion-safe:scale-x-0', shouldAnimate && 'reveal-grow-horizontal')}
                                style={{ background: 'linear-gradient(90deg, var(--color-brand-cyan-dark), var(--color-brand-cyan-main))' }}
                                aria-hidden="true"
                            />
                        </div>
                    )}
                    <p
                        className={twMerge('max-w-xl mx-auto text-center text-black/70', !revealed && 'motion-safe:opacity-0', shouldAnimate && 'reveal-fade-in-down')}
                        style={{ animationDelay: '200ms' }}
                    >
                        {description}
                    </p>
                    <div
                        className={twMerge(!revealed && 'motion-safe:opacity-0', shouldAnimate && 'reveal-fade-in')}
                        style={{ animationDelay: '300ms' }}
                    >
                        <ButtonGroup>
                            {buttonsToRender.map((button, index) => (
                                <Button
                                    key={index}
                                    theme={button.theme}
                                    link={button.link}
                                    target={button.target}
                                    rel={button.rel}
                                >
                                    {button.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default DownloadSectionComponent;
