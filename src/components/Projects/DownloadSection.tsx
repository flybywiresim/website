import { ReactNode } from 'react';
import Section from '../Utils/Section';
import Container from '../Utils/Container';
import Button from '../Button/Button';

interface ButtonConfig {
    label: string;
    theme: 'primary' | 'secondary' | 'positive' | 'caution' | 'danger' | 'discord';
    link?: string;
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
    const defaultButtons: ButtonConfig[] = [
        { label: 'Direct Downloads', theme: 'secondary' },
        { label: 'Download Installer', theme: 'primary', link: '/community' },
        { label: 'Installation Guide', theme: 'secondary' },
    ];

    const buttonsToRender = buttons ?? defaultButtons;

    return (
        <div className="flex flex-col text-center justify-center gap-6">
            {heading && (
                <h2 className="font-semibold text-black">{heading}</h2>
            )}
            <p className="max-w-xl mx-auto text-center">{description}</p>
            <ButtonGroup>
                {buttonsToRender.map((button, index) => (
                    <Button
                        key={index}
                        label={button.label}
                        theme={button.theme}
                        link={button.link}
                    />
                ))}
            </ButtonGroup>
        </div>
    );
};

export default DownloadSectionComponent;
