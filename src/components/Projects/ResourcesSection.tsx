import Link from 'next/link';
import Image from 'next/legacy/image';
import Button from '../Button/Button';
import Section from '../Utils/Section';
import Container from '../Utils/Container';

interface ResourceItem {
    description: string;
    button: {
        label: string;
        theme: 'primary' | 'secondary' | 'positive' | 'caution' | 'danger' | 'discord';
        link: string;
    };
}

const ButtonWrapper: React.FC<{ link: string; children: React.ReactNode }> = ({ link, children }) => (
    <Link href={link} legacyBehavior passHref>
        <span className="w-fit cursor-pointer">{children}</span>
    </Link>
);

interface ResourcesSectionProps {
    title: string;
    description: string;
    resources: ResourceItem[];
}

const BackgroundImage = () => (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-screen opacity-5">
        <Image src="/pages/index/Airfoil.png" layout="fill" objectFit="cover" />
    </div>
);

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ title, description, resources }) => (
    <Section className="relative" theme="dark">
        <BackgroundImage />
        <Container className="gap-6">
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex flex-wrap gap-6">
                {resources.map((resource, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between min-h-[100%] w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] gap-4 "
                    >
                        <p>{resource.description}</p>
                        <ButtonWrapper link={resource.button.link}>
                            <Button label={resource.button.label} theme={resource.button.theme} />
                        </ButtonWrapper>
                    </div>
                ))}
            </div>
        </Container>
    </Section>
);

export default ResourcesSection;
