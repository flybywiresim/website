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
    minimumCPU,
    minimumGPU,
    minimumMemory,
    minimumStorage,
    minimumNotice,
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
    disclaimer,
}) => (
    <div className="flex flex-col gap-4">
        <div>
            <h3>System Requirements</h3>
            <p>
                The following system specifications provide a general guideline for smooth performance with the
                {' '}
                {project}
                .
            </p>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row justify-between">
            <div className="gap-0 md:gap-6 w-full min-w-[250px]">
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
            <div className="gap-0 md:gap-6 w-full min-w-[250px]">
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
            <div className="gap-0 md:gap-6 w-full">
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
    </div>
);

export default SystemRequirementsSection;
