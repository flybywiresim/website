import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Section from '../Utils/Section';
import Container from '../Utils/Container';
import Button, { ButtonProps } from '../Button/Button';

interface DownloadButton {
    label: string;
    link: string;
    theme?: ButtonProps['theme'];
}

interface DownloadSectionProps {
    title?: string;
    description?: string;
    buttons?: DownloadButton[];
    imageSrc?: string;
    imageAlt?: string;
}

const DownloadSection: NextPage<DownloadSectionProps> = ({
    title = 'Available For Free',
    description = 'Get started by downloading our installer to seamlessly enjoy our projects.',
    buttons = [],
    imageSrc = '/pages/index/installerPreview.png',
    imageAlt = 'Installer screenshot',
}) => {
    const router = useRouter();

    return (
        <Section theme="light">
            <Container className="flex flex-col md:flex-row gap-0 md:gap-6 items-center md:items-start">
                <div className="flex flex-col gap-0 md:gap-6">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {buttons.length > 0 && (
                        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
                            {buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    label={button.label}
                                    theme={button.theme || 'secondary'}
                                    onClick={() => router.push(button.link)}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {imageSrc && (
                    <div>
                        <img
                            alt={imageAlt}
                            src={imageSrc}
                            className={`m-0 shadow-2xl 
                            [transform:perspective(600px)_rotateY(20deg)_rotateX(20deg)_rotateZ(0deg)_scale(0.93)] 
                            sm:[transform:perspective(800px)_rotateY(20deg)_rotateX(20deg)_rotateZ(0deg)_scale(0.93)] 
                            md:[transform:perspective(1000px)_rotateY(20deg)_rotateX(20deg)_rotateZ(0deg)_scale(0.93)] 
                            lg:[transform:perspective(1200px)_rotateY(20deg)_rotateX(20deg)_rotateZ(2deg)_scale(0.95)] 
                            xl:[transform:perspective(1400px)_rotateY(20deg)_rotateX(20deg)_rotateZ(2deg)_scale(0.90)]`}
                        />
                    </div>
                )}
            </Container>
        </Section>
    );
};

export default DownloadSection;
