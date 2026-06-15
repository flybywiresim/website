import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type FeatureGridProps = {
    children: ReactNode;
    className?: string;
};

const FeatureGrid = ({ children, className }: FeatureGridProps) => (
    <div
        className={twMerge(
            'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
            className,
        )}
    >
        {children}
    </div>
);

export default FeatureGrid;
