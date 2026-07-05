import Button from '../Button/Button';

interface ResourceItem {
    description: string;
    button: {
        label: string;
        theme: 'primary' | 'secondary' | 'positive' | 'caution' | 'danger' | 'discord';
        link: string;
    };
}

interface ResourcesSectionProps {
    title: string;
    description: string;
    resources: ResourceItem[];
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ title, description, resources }) => (
    <div className="flex flex-col gap-4">
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
                    <Button label={resource.button.label} theme={resource.button.theme} link={resource.button.link} />
                </div>
            ))}
        </div>
    </div>
);

export default ResourcesSection;
