import { twMerge } from 'tailwind-merge';
import useScrollReveal from '../../hooks/useScrollReveal';

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
}) => {
    const { ref, revealed, shouldAnimate } = useScrollReveal<HTMLDivElement>();
    const reveal = twMerge(!revealed && 'motion-safe:opacity-0', shouldAnimate && 'reveal-fade-in');

    const columns = [
        { label: 'Minimum', cpu: minimumCPU, gpu: minimumGPU, memory: minimumMemory, storage: minimumStorage, notice: minimumNotice, minWidth: true },
        { label: 'Recommended', cpu: recommendedCPU, gpu: recommendedGPU, memory: recommendedMemory, storage: recommendedStorage, notice: recommendedNotice, minWidth: true },
        { label: 'Flying By Wire', cpu: flyingByWireCPU, gpu: flyingByWireGPU, memory: flyingByWireMemory, storage: flyingByWireStorage, notice: flyingByWireNotice },
    ];

    return (
        <div ref={ref} className="flex flex-col gap-8 md:gap-4">
            <div className={reveal}>
                <h3>System Requirements</h3>
                <p>
                    The following system specifications provide a general guideline for smooth performance with the
                    {' '}
                    {project}
                    .
                </p>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row justify-between">
                {columns.map((col, index) => (
                    <div
                        key={col.label}
                        className={twMerge('gap-0 md:gap-6 w-full', col.minWidth && 'min-w-[250px]', reveal)}
                        style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                        <p>
                            <b>{col.label}</b>
                        </p>
                        <ul className="list-disc pl-5">
                            <li>
                                CPU:
                                {' '}
                                {col.cpu}
                            </li>
                            <li>
                                GPU:
                                {' '}
                                {col.gpu}
                            </li>
                            <li>
                                Memory:
                                {' '}
                                {col.memory}
                            </li>
                            <li>
                                Storage:
                                {' '}
                                {col.storage}
                            </li>
                        </ul>
                        {col.notice && (
                            <i className="text-sm opacity-75">{col.notice}</i>
                        )}
                    </div>
                ))}
            </div>
            <p className={reveal} style={{ animationDelay: '500ms' }}>
                {disclaimer}
            </p>
        </div>
    );
};

export default SystemRequirementsSection;
