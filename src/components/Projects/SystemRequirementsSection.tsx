import Image from 'next/legacy/image';
import Section from '../Utils/Section';
import Container from '../Utils/Container';

const BackgroundImage = () => (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-screen opacity-5">
        <Image src="/pages/index/Airfoil.png" layout="fill" objectFit="cover" />
    </div>
);

interface SystemRequirementsSectionProps {
    project: string;
    theme: 'light' | 'dark';
    minimumCPU: string;
    minimumGPU: string;
    minimumMemory: string;
    minimumStorage: string;
    minimumNotice?: string;
    recommendedCPU: string;
    recommendedGPU: string;
    recommendedMemory: string;
    recommendedStorage: string;
    recommendedNotice?: string;
    flyingByWireCPU: string;
    flyingByWireGPU: string;
    flyingByWireMemory: string;
    flyingByWireStorage: string;
    flyingByWireNotice?: string;
    disclaimer?: string;
}

const SystemRequirementsSection: React.FC<SystemRequirementsSectionProps> = ({
    project,
    theme,
    minimumCPU,
    minimumGPU,
    minimumMemory,
    minimumStorage,
    minimumNotice = 'At least 4-8GB needed for virtual memory',
    recommendedCPU,
    recommendedGPU,
    recommendedMemory,
    recommendedStorage,
    recommendedNotice,
    flyingByWireCPU,
    flyingByWireGPU,
    flyingByWireMemory,
    flyingByWireStorage,
    flyingByWireNotice,
    disclaimer = 'Please note that these system requirements are based on the v0.10 open-alpha release and are subject to change as the project evolves.',
}) => (
    <Section className="relative" theme={theme}>
        <BackgroundImage />
        <Container className="gap-6">
            <div>
                <h3>System Requirements</h3>
                <p>
                    The following system specifications provide a general guideline for smooth performance with the
                    {' '}
                    {project}
                    .
                </p>
            </div>
            <div className="flex flex-col gap-6 md:flex-row justify-between">
                <div className="gap-0 md:gap-6 w-full md:w-[300px] min-w-[250px]">
                    <p>
                        <b>Minimum</b>
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            CPU:
                            {' '}
                            {minimumCPU}
                        </li>
                        <li>
                            GPU:
                            {' '}
                            {minimumGPU}
                        </li>
                        <li>
                            Memory:
                            {' '}
                            {minimumMemory}
                        </li>
                        <li>
                            Storage:
                            {' '}
                            {minimumStorage}
                        </li>
                    </ul>
                    <i className="text-sm opacity-75">{minimumNotice}</i>
                </div>
                <div className="gap-0 md:gap-6 w-full md:w-[300px] min-w-[250px]">
                    <p>
                        <b>Recommended</b>
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            CPU:
                            {' '}
                            {recommendedCPU}
                        </li>
                        <li>
                            GPU:
                            {' '}
                            {recommendedGPU}
                        </li>
                        <li>
                            Memory:
                            {' '}
                            {recommendedMemory}
                        </li>
                        <li>
                            Storage:
                            {' '}
                            {recommendedStorage}
                        </li>
                    </ul>
                    {recommendedNotice && (
                        <i className="text-sm opacity-75">{recommendedNotice}</i>
                    )}
                </div>
                <div className="gap-0 md:gap-6 w-full md:w-[300px] min-w-[250px]">
                    <p>
                        <b>Flying By Wire</b>
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            CPU:
                            {' '}
                            {flyingByWireCPU}
                        </li>
                        <li>
                            GPU:
                            {' '}
                            {flyingByWireGPU}
                        </li>
                        <li>
                            Memory:
                            {' '}
                            {flyingByWireMemory}
                        </li>
                        <li>
                            Storage:
                            {' '}
                            {flyingByWireStorage}
                        </li>
                    </ul>
                    {flyingByWireNotice && (
                        <i className="text-sm opacity-75">{flyingByWireNotice}</i>
                    )}
                </div>
            </div>
            <p>{disclaimer}</p>
        </Container>
    </Section>
);

export default SystemRequirementsSection;
