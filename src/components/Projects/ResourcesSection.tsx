import { twMerge } from 'tailwind-merge';
import Button from '../Button/Button';
import useScrollReveal from '../../hooks/useScrollReveal';

interface ResourceItem {
    description: string;
    button: {
        label: string;
        theme: 'primary' | 'secondary' | 'positive' | 'caution' | 'danger' | 'discord';
        link: string;
        target?: '_blank' | '_parent' | '_self' | '_top';
        rel?: string;
    };
}

interface ResourcesSectionProps {
    title: string;
    description: string;
    resources: ResourceItem[];
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ title, description, resources }) => {
    const { ref, revealed, shouldAnimate } = useScrollReveal<HTMLDivElement>();
    const reveal = twMerge(!revealed && 'motion-safe:opacity-0', shouldAnimate && 'reveal-fade-in');

    return (
        <div ref={ref} className="flex flex-col gap-8 md:gap-4">
            <div className={reveal}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex flex-wrap gap-6">
                {resources.map((resource, index) => (
                    <div
                        key={index}
                        className={twMerge('flex flex-col justify-between min-h-[100%] w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] gap-4', reveal)}
                        style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                        <p>{resource.description}</p>
                        <Button theme={resource.button.theme} link={resource.button.link} target={resource.button.target} rel={resource.button.rel}>
                            {resource.button.label}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResourcesSection;
